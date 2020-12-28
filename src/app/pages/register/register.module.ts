import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExploreContainerComponentModule } from '../../containers/explore-container/explore-container.module';

import {RegisterPage} from "./register.page";
import {RegisterPageRoutingModule} from "./register-routing.module";
import {BonlySharedLibsModule} from "../../shared/shared-libs.module";
import {TermsModalPage} from "./terms/terms.page";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ExploreContainerComponentModule,
        FormsModule,
        ReactiveFormsModule,
        RegisterPageRoutingModule,
        BonlySharedLibsModule,

    ],
  declarations: [RegisterPage, TermsModalPage]
})
export class RegisterPageModule {}
