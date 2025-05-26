import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarbelumbayarPageRoutingModule } from './daftarbelumbayar-routing.module';

import { DaftarbelumbayarPage } from './daftarbelumbayar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarbelumbayarPageRoutingModule
  ],
  declarations: [DaftarbelumbayarPage]
})
export class DaftarbelumbayarPageModule {}
