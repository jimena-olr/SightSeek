import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokioPageRoutingModule } from './tokio-routing.module';

import { TokioPage } from './tokio.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokioPageRoutingModule
  ],
  declarations: [TokioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TokioPageModule {}
