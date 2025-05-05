import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahcustomerPageRoutingModule } from './tambahcustomer-routing.module';

import { TambahcustomerPage } from './tambahcustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahcustomerPageRoutingModule
  ],
  declarations: [TambahcustomerPage]
})
export class TambahcustomerPageModule {}
