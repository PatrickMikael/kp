import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockmanagerPageRoutingModule } from './stockmanager-routing.module';

import { StockmanagerPage } from './stockmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockmanagerPageRoutingModule
  ],
  declarations: [StockmanagerPage]
})
export class StockmanagerPageModule {}
