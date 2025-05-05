import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambahcustomer',
  templateUrl: './tambahcustomer.page.html',
  styleUrls: ['./tambahcustomer.page.scss'],
  standalone:false,
})
export class TambahcustomerPage implements OnInit {
  constructor(private customerService: CustomerService,
    private router: Router) { }
  customer = {
    nama: '',
    pengirim: '',
    jenis_pesanan: '',
  }
  ngOnInit() {
  }
  tambahCustomer() {
    if (
      this.customer.nama.trim() === '' ||
      this.customer.pengirim.trim() === '' ||
      this.customer.jenis_pesanan.trim() === ''
    ) {
      alert('Semua data harus diisi');
      return;
    }

    this.customerService.createCustomer(this.customer).subscribe({
      next: (res) => {
        alert('Customer berhasil ditambahkan');
        this.router.navigate(['/']); // Ubah ke halaman yang sesuai jika perlu
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Gagal menambahkan customer');
      }
    });
  }
}
