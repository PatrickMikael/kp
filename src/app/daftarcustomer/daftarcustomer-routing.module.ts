import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarcustomerPage } from './daftarcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarcustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarcustomerPageRoutingModule {}
