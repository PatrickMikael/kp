import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tambahpesanan',
    loadChildren: () => import('./tambahpesanan/tambahpesanan.module').then( m => m.TambahpesananPageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'tambahcustomer',
    loadChildren: () => import('./tambahcustomer/tambahcustomer.module').then( m => m.TambahcustomerPageModule)
  },
  {
    path: 'katalog',
    loadChildren: () => import('./katalog/katalog.module').then( m => m.KatalogPageModule)
  },  {
    path: 'daftarcustomer',
    loadChildren: () => import('./daftarcustomer/daftarcustomer.module').then( m => m.DaftarcustomerPageModule)
  },
  {
    path: 'daftarpesanan',
    loadChildren: () => import('./daftarpesanan/daftarpesanan.module').then( m => m.DaftarpesananPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'stockmanager',
    loadChildren: () => import('./stockmanager/stockmanager.module').then( m => m.StockmanagerPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
