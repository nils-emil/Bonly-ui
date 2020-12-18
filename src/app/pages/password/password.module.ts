import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordPage} from "./password.page";
import {PasswordStrengthBarComponent} from "./password-strength-bar.component";
import {PasswordPageRoutingModule} from "./password-routing.module";


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        PasswordPageRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  declarations: [
    PasswordStrengthBarComponent,
    PasswordPage
  ]
})
export class PasswordPageModule {
}
