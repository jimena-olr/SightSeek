import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadridPageRoutingModule } from './madrid-routing.module';

import { MadridPage } from './madrid.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadridPageRoutingModule
  ],
  declarations: [MadridPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MadridPageModule {}
