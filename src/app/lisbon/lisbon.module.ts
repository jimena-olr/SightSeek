import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisbonPageRoutingModule } from './lisbon-routing.module';

import { LisbonPage } from './lisbon.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisbonPageRoutingModule,
  ],
  declarations: [LisbonPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LisbonPageModule {}



