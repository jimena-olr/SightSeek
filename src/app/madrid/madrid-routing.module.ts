import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadridPage } from './madrid.page';

const routes: Routes = [
  {
    path: '',
    component: MadridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadridPageRoutingModule {}
