import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';

import {RegisterService} from './register.service';
import {Router} from '@angular/router';
import {EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE} from "../../shared/constants/error.constants";
import {PrizeRegistrationModalComponent} from "../tab1/prize-registration-modal/prize-registration-modal.component";
import {ModalController} from "@ionic/angular";
import {TermsModalPage} from "./terms/terms.page";

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  doNotMatch = false;
  error = false;
  errorMessage = "";
  errorEmailExists = false;
  errorUserExists = false;
  success = false;
  termsNotAccepted: boolean;

  registerForm = this.fb.group({
    login: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
      ],
    ],
    firstName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    lastName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    termsAndConditions: ['false', [Validators.required, Validators.pattern("true")]],
  });


  constructor(
      private registerService: RegisterService,
      private router: Router,
      private fb: FormBuilder,
      public modalController: ModalController
  ) {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TermsModalPage,
      cssClass: 'prize-registration-modal'
    });
    return await modal.present();
  }


  register(): void {
    this.doNotMatch = false;
    this.error = false;
    this.errorEmailExists = false;
    this.errorUserExists = false;
    this.termsNotAccepted = false;
    const password = this.registerForm.get(['password'])!.value;
    const terms = this.registerForm.get(['termsAndConditions'])!.value;
    if (terms !== true) {
      this.termsNotAccepted = true;
    }
    else if (password !== this.registerForm.get(['confirmPassword'])!.value) {
      this.doNotMatch = true;
    } else {
      const login = this.registerForm.get(['login'])!.value;
      const email = this.registerForm.get(['email'])!.value;
      this.registerService.save({login, email, password}).subscribe(
          () => (this.success = true),
          response => this.processError(response)
      );
    }
  }

  openLogin(): void {
    this.router.navigate(['/login']);
  }

  private processError(response: HttpErrorResponse): void {
    debugger;
    if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
      this.errorUserExists = true;
    } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
      this.errorEmailExists = true;
    } else {
      this.error = response.error.title;
    }
  }

  backToHomePage(): void {
    this.router.navigate(['']);
  }
}
