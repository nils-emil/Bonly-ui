import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsPage } from './awards.page';

const routes: Routes = [
  {
    path: '',
    component: AwardsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwardsPageRoutingModule {}
