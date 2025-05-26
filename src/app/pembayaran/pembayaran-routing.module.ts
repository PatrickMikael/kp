import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PembayaranPage } from './pembayaran.page';

const routes: Routes = [
  {
    path: '',
    component: PembayaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PembayaranPageRoutingModule {}
