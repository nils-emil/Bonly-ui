import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../../containers/explore-container/explore-container.module';
import {HomePageRoutingModule} from "./home-routing.module";
import {HomePage} from "./home.page";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BonlySharedLibsModule} from "../../shared/shared-libs.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule,
    BonlySharedLibsModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
