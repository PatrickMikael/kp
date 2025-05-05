import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahcustomerPage } from './tambahcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: TambahcustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahcustomerPageRoutingModule {}
