import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KatalogPageRoutingModule } from './katalog-routing.module';

import { KatalogPage } from './katalog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KatalogPageRoutingModule
  ],
  declarations: [KatalogPage]
})
export class KatalogPageModule {}
