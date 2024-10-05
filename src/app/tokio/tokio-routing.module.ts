import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokioPage } from './tokio.page';

const routes: Routes = [
  {
    path: '',
    component: TokioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokioPageRoutingModule {}
