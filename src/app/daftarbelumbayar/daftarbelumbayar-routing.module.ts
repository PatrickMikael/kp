import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarbelumbayarPage } from './daftarbelumbayar.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarbelumbayarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarbelumbayarPageRoutingModule {}
