import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PembayaranPageRoutingModule } from './pembayaran-routing.module';

import { PembayaranPage } from './pembayaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PembayaranPageRoutingModule
  ],
  declarations: [PembayaranPage]
})
export class PembayaranPageModule {}
