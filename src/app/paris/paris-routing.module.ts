import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParisPage } from './paris.page';

const routes: Routes = [
  {
    path: '',
    component: ParisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParisPageRoutingModule {}
