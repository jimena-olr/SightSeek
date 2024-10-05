import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParisPageRoutingModule } from './paris-routing.module';

import { ParisPage } from './paris.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParisPageRoutingModule
  ],
  declarations: [ParisPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParisPageModule {}


