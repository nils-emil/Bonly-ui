import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyAccountPage } from './my-account.page';
import { ExploreContainerComponentModule } from '../../containers/explore-container/explore-container.module';

import { MyAccountPageRoutingModule } from './my-account-routing.module';
import {BonlySharedLibsModule} from "../../shared/shared-libs.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        MyAccountPageRoutingModule,
        ReactiveFormsModule,
        BonlySharedLibsModule,
    ],
  declarations: [MyAccountPage]
})
export class MyAccountPageModule {}
