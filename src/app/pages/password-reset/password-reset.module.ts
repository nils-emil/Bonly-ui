import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExploreContainerComponentModule } from '../../containers/explore-container/explore-container.module';
import {PasswordResetFinishPage} from "./finish/password-reset-finish.page";
import {PasswordResetInitPage} from "./init/password-reset-init.page";
import {PasswordResetPageRoutingModule} from "./password-reset-routing.module";
import {BonlySharedLibsModule} from "../../shared/shared-libs.module";


@NgModule({
    imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        PasswordResetPageRoutingModule,
        BonlySharedLibsModule
    ],
  declarations: [PasswordResetFinishPage, PasswordResetInitPage]
})
export class PasswordResetPageModule {}
