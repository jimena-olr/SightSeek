import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RomePageRoutingModule } from './rome-routing.module';

import { RomePage } from './rome.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomePageRoutingModule
  ],
  declarations: [RomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RomePageModule {}
