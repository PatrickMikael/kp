import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarpembayaranPageRoutingModule } from './daftarpembayaran-routing.module';

import { DaftarpembayaranPage } from './daftarpembayaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarpembayaranPageRoutingModule
  ],
  declarations: [DaftarpembayaranPage]
})
export class DaftarpembayaranPageModule {}
