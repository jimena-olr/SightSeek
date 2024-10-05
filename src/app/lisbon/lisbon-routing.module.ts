import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisbonPage } from './lisbon.page';

const routes: Routes = [
  {
    path: '',
    component: LisbonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisbonPageRoutingModule {}
