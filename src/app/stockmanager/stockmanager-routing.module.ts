import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockmanagerPage } from './stockmanager.page';

const routes: Routes = [
  {
    path: '',
    component: StockmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockmanagerPageRoutingModule {}
