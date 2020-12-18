import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AwardsPage } from './awards.page';
import { ExploreContainerComponentModule } from '../../containers/explore-container/explore-container.module';

import { AwardsPageRoutingModule } from './awards-routing.module';
import {BonlySharedLibsModule} from "../../shared/shared-libs.module";
import {PrizeRegistrationModalComponent} from "./prize-registration-modal/prize-registration-modal.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AwardsPageRoutingModule,
    BonlySharedLibsModule
  ],
  declarations: [AwardsPage, PrizeRegistrationModalComponent]
})
export class AwardsPageModule {}
