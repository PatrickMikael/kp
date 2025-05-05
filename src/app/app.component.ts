import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: "Dashboard", url: "/home", icon: "home" },
    { title: "Katalog Produk", url: "/katalog", icon: "list" },
    { title: "Tambah Customer", url: "/tambahcustomer", icon: "person-add" },
    { title: "Daftar Customer", url: "/daftarcustomer", icon: "people" },
    { title: "Tambah Pesanan", url: "/tambahpesanan", icon: "cart" },
    { title: "Daftar Pesanan", url: "/daftarpesanan", icon: "receipt" },
  ]
  constructor() {}
}
