import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BubbleBackendComponent} from "./components/bubble-backend/bubble-backend.component";

@NgModule({
  declarations: [BubbleBackendComponent],

  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BubbleBackendComponent
  ],
})
export class BonlySharedLibsModule {
}
