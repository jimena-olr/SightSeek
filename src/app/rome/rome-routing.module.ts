import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomePage } from './rome.page';

const routes: Routes = [
  {
    path: '',
    component: RomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RomePageRoutingModule {}
