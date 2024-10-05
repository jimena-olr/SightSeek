import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashingtonPageRoutingModule } from './washington-routing.module';

import { WashingtonPage } from './washington.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashingtonPageRoutingModule
  ],
  declarations: [WashingtonPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WashingtonPageModule {}
