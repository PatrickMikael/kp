import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { KueService } from '../services/kue.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambahpesanan',
  templateUrl: './tambahpesanan.page.html',
  styleUrls: ['./tambahpesanan.page.scss'],
  standalone: false,
})
export class TambahpesananPage implements OnInit {
  customers: any[] = [];
  menus: any[] = [];
  selectedCustomer: number | null = null;
  waktuAmbil: string = '';
  keranjang: { idmenu: number; nama: string; kuantitas: number }[] = [];

  constructor(
    private customerService: CustomerService,
    private kueService: KueService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCustomers();
    this.loadMenus();
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
    });
  }

  loadMenus() {
    this.kueService.getAllKue().subscribe((res) => {
      this.menus = res;
    });
  }

  tambahKeKeranjang(menu: any) {
    const index = this.keranjang.findIndex(
      (item) => item.idmenu === menu.idmenu
    );
    if (index === -1) {
      this.keranjang.push({
        idmenu: menu.idmenu,
        nama: menu.nama,
        kuantitas: 1,
      });
    } else {
      this.keranjang[index].kuantitas++;
    }
  }

  submitPesanan() {
    const items = this.keranjang.map((item) => ({
      idmenu: item.idmenu,
      kuantitas: item.kuantitas,
    }));

    const payload = {
      idcustomer: this.selectedCustomer,
      waktu_ambil: this.waktuAmbil,
      items,
    };
    this.http
      .post('http://localhost:3000/api/orders/create', payload)
      .subscribe({
        next: (res) => {
          alert('Pesanan berhasil ditambahkan');
          this.selectedCustomer = null;
          this.waktuAmbil = '';
          this.keranjang = [];
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Gagal menambahkan pesanan');
        },
      });
  }
}
