import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable, of, ReplaySubject} from 'rxjs';
import {catchError, shareReplay, tap} from 'rxjs/operators';
import {Account} from '../user/account.model';
import {SERVER_API_URL} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class AccountService {
    private userIdentity: Account | null = null;
    private authenticationState = new ReplaySubject<Account | null>(1);
    private accountCache$?: Observable<Account | null>;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
    }

    save(account: Account): Observable<{}> {
        return this.http.post(SERVER_API_URL + 'api/account', account);
    }

    authenticate(identity: Account | null): void {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
    }

    hasAnyAuthority(authorities: string[] | string): boolean {
        if (!this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        return this.userIdentity.authorities.some((authority: string) => authorities.includes(authority));
    }

    identity(force?: boolean): Observable<Account | null> {
        if (!this.accountCache$ || force || !this.isAuthenticated()) {
            this.accountCache$ = this.fetch().pipe(
                catchError(() => {
                    return of(null);
                }),
                tap((account: Account | null) => {
                    this.authenticate(account);
                    if (account && (!account.age)) {
                        this.router.navigate(['/account/age']);
                    } else if (account && (!account.gender)) {
                        this.router.navigate(['/account/gender']);
                    }
                }),
                shareReplay()
            );
        }
        return this.accountCache$;
    }

    isAuthenticated(): boolean {
        return this.userIdentity !== null;
    }

    isAdmin(): boolean {
        return this.userIdentity != null && this.userIdentity.authorities.includes('ROLE_ADMIN');
    }

    getAuthenticationState(): Observable<Account | null> {
        return this.authenticationState.asObservable();
    }

    getImageUrl(): string {
        return this.userIdentity ? this.userIdentity.imageUrl : '';
    }

    private fetch(): Observable<Account> {
        return this.http.get<Account>(SERVER_API_URL + 'api/account');
    }

    public getAccount(): Observable<Account> {
        return this.http.get<Account>(SERVER_API_URL + 'api/account');
    }

    private navigateToStoredUrl(): void {
        // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
        // if login is successful, go to stored previousState and clear previousState
        this.router.navigate(['/tabs/content']);
    }
}
