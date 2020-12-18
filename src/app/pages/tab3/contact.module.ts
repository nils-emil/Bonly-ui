import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';
import { ExploreContainerComponentModule } from '../../containers/explore-container/explore-container.module';

import { ContactPageRoutingModule } from './contact-routing.module';
import {BonlySharedLibsModule} from "../../shared/shared-libs.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: ContactPage}]),
        ContactPageRoutingModule,
        BonlySharedLibsModule,
    ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
