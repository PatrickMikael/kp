import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahpesananPage } from './tambahpesanan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahpesananPage
  },
  {
    path: 'pembayaran',
    loadChildren: () => import('../pembayaran/pembayaran.module').then( m => m.PembayaranPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahpesananPageRoutingModule {}
