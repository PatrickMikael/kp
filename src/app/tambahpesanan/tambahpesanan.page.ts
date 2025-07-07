import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { KueService } from '../services/kue.service';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-tambahpesanan',
  templateUrl: './tambahpesanan.page.html',
  styleUrls: ['./tambahpesanan.page.scss'],
  standalone: false,
})
export class TambahpesananPage implements OnInit {
  customers: any[] = [];
  menus: any[] = [];
  selectedCustomerId: number | null = null;
  waktuAmbil: string = '';
  selectedProducts: any[] = []; // Produk yang dipilih
  submitting: boolean = false;
  tipeAmbil: string = 'langsung';
  namaPenerima: string = '';
  teleponPenerima: string = '';
  alamatKirim: string = '';
  tanggalKirim: string = '';
  jamKirim: string = '';
  kartuKepada: string = '';
  kartuUcapan: string = '';
  kartuDari: string = '';
  butuhInvoice: boolean = false;

  constructor(
    private customerService: CustomerService,
    private kueService: KueService,
    private orderService: OrderService,
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

  addProduct(product: any) {
    const existingProduct = this.selectedProducts.find(
      (item) => item.idmenu === product.idmenu
    );

    if (existingProduct) {
      existingProduct.kuantitas++;
      existingProduct.subtotal =
        existingProduct.kuantitas * existingProduct.harga;
    } else {
      this.selectedProducts.push({
        ...product,
        kuantitas: 1,
        subtotal: product.harga,
      });
    }
  }

  removeProduct(index: number) {
    this.selectedProducts.splice(index, 1);
  }

  updateQuantity(index: number, event: any) {
    const quantity = event.detail.value;
    if (quantity < 1) return;
    this.selectedProducts[index].kuantitas = quantity;
    this.selectedProducts[index].subtotal =
      quantity * this.selectedProducts[index].harga;
  }

  get totalHarga() {
    return this.selectedProducts.reduce((acc, item) => acc + item.subtotal, 0);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  }

  submitOrder() {
    this.submitting = true;

    const items = this.selectedProducts.map((item) => ({
      idmenu: item.idmenu,
      kuantitas: item.kuantitas,
    }));

    let waktuAmbilFinal = '';
    let payload: any = {
      idcustomer: this.selectedCustomerId,
      tipe_ambil: this.tipeAmbil,
      items,
      kartu_kepada: this.kartuKepada,
      kartu_ucapan: this.kartuUcapan,
      kartu_dari: this.kartuDari,
      invoice: this.butuhInvoice ? 'Ya' : 'Tidak',
    };

    if (this.tipeAmbil === 'langsung') {
      if (!this.waktuAmbil) {
        alert('Waktu ambil wajib diisi.');
        this.submitting = false;
        return;
      }
      payload.waktu_ambil = this.waktuAmbil;
      // Kolom kirim dikosongkan
      payload.nama_penerima = null;
      payload.telepon_penerima = null;
      payload.alamat_kirim = null;
      payload.tanggal_kirim = null;
      payload.jam_kirim = null;
    } else if (this.tipeAmbil === 'kirim') {
      if (!this.tanggalKirim || !this.jamKirim) {
        alert('Tanggal dan jam kirim wajib diisi.');
        this.submitting = false;
        return;
      }
      waktuAmbilFinal = `${this.tanggalKirim}T${this.jamKirim}`;
      payload.waktu_ambil = waktuAmbilFinal;
      payload.nama_penerima = this.namaPenerima;
      payload.telepon_penerima = this.teleponPenerima;
      payload.alamat_kirim = this.alamatKirim;
      payload.tanggal_kirim = this.tanggalKirim;
      payload.jam_kirim = this.jamKirim;
    }

    console.log('Payload yang dikirim:', payload);

    this.orderService.createOrder(payload).subscribe({
      next: (res) => {
        alert('Pesanan berhasil ditambahkan');
        const orderId = res.orderId;
        this.router.navigate(['/pembayaran', orderId]);
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Gagal menambahkan pesanan');
      },
      complete: () => {
        this.submitting = false;
      },
    });
  }
}
