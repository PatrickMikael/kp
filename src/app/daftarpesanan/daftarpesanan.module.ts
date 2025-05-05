import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarpesananPageRoutingModule } from './daftarpesanan-routing.module';

import { DaftarpesananPage } from './daftarpesanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarpesananPageRoutingModule
  ],
  declarations: [DaftarpesananPage]
})
export class DaftarpesananPageModule {}
