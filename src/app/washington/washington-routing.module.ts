import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashingtonPage } from './washington.page';

const routes: Routes = [
  {
    path: '',
    component: WashingtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashingtonPageRoutingModule {}
