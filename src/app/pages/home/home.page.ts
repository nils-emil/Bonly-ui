import {Component, AfterViewInit, ElementRef, ViewChild, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from "rxjs";
import {AccountService} from "../../core/auth/account.service";
import { Account } from '../../core/user/account.model';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  register(): void {
    this.router.navigate(['/account/register']);
  }

  forgotPassword(): void {
    this.router.navigate(['/reset/request']);
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
