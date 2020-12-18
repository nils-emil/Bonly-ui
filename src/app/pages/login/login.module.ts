import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../../containers/explore-container/explore-container.module';
import {LoginPageRoutingModule} from "./login-routing.module";
import {LoginPage} from "./login.page";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BonlySharedLibsModule} from "../../shared/shared-libs.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ExploreContainerComponentModule,
        LoginPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BonlySharedLibsModule
    ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
