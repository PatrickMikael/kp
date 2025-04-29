import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahpesananPageRoutingModule } from './tambahpesanan-routing.module';

import { TambahpesananPage } from './tambahpesanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahpesananPageRoutingModule
  ],
  declarations: [TambahpesananPage]
})
export class TambahpesananPageModule {}
