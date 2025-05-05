import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarcustomerPageRoutingModule } from './daftarcustomer-routing.module';

import { DaftarcustomerPage } from './daftarcustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarcustomerPageRoutingModule
  ],
  declarations: [DaftarcustomerPage]
})
export class DaftarcustomerPageModule {}
