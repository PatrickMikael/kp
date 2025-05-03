import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KatalogPage } from './katalog.page';

const routes: Routes = [
  {
    path: '',
    component: KatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KatalogPageRoutingModule {}
