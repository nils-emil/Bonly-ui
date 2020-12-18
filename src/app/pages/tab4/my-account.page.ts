import {Component} from '@angular/core';
import {LoginService} from "../../core/login/login.service";
import {Router} from "@angular/router";
import {AccountService} from "../../core/auth/account.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Account} from '../../core/user/account.model'
import {ToastController} from "@ionic/angular";
@Component({
  selector: 'app-tab3',
  templateUrl: 'my-account.page.html',
  styleUrls: ['my-account.page.scss']
})
export class MyAccountPage {

  constructor(
      private accountService: AccountService,
      private fb: FormBuilder,
      private loginService: LoginService,
      public toastController: ToastController,
      private router: Router
  ) {}

  account!: Account;
  success = false;
  // TODO extract these
  ages = ['0 - 9', '10 - 13', '14 - 17', '17 - 21', '21 - 25', '25 - 35', '36 - 50', '50 - 69', '69 +'];
  showMoreInpts = false;

  // TODO find out if we will use first and lastname
  settingsForm = this.fb.group({
    // firstName: [undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    // lastName: [undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    login: [undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    age: [],
    email: [undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    langKey: [undefined],
  });



  ngOnInit(): void {
    this.accountService.identity().subscribe(account => {
      if (account) {
        this.settingsForm.patchValue({
          login: account.login,
          // firstName: account.firstName,
          // lastName: account.lastName,
          age: account.age,
          email: account.email,
          langKey: account.langKey,
        });

        this.account = account;
      }
    });
  }

  async successToast() {
      const toast = await this.toastController.create({
        header: 'Account updated successfully',
        position: 'top',
        animated: true,
        color: "primary",
        cssClass: "max-width-toast",
        duration: 2000,
      });
      toast.present();
  }


  save(): void {
    this.success = false;
    this.account.login = this.settingsForm.get('login')!.value;
    // this.account.firstName = this.settingsForm.get('firstName')!.value;
    // this.account.lastName = this.settingsForm.get('lastName')!.value;
    this.account.email = this.settingsForm.get('email')!.value;
    this.account.age = this.settingsForm.get('age')!.value;
    this.account.langKey = this.settingsForm.get('langKey')!.value;
    console.log(this.account)
    this.accountService.save(this.account).subscribe(() => {
      this.success = true;
      this.successToast();
      this.accountService.authenticate(this.account);
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['home']);
  }

  selectGender(gender: string): void {
    if (this.account) {
      this.account.gender = gender;
    }
  }

    routeToPassWordChange() {
      this.router.navigate(['/password']);
    }
}
