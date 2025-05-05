import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarpesananPage } from './daftarpesanan.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarpesananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarpesananPageRoutingModule {}
