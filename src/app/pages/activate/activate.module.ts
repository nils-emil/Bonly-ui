import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BonlySharedLibsModule} from "../../shared/shared-libs.module";
import {ActivatePage} from "./activate.page";
import {ActivatePageRoutingModule} from "./activate-routing.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ActivatePageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BonlySharedLibsModule
    ],
    declarations: [ActivatePage]
})
export class ActivatePageModule {
}
