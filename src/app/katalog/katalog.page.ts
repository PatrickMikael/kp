import { Component, OnInit } from '@angular/core';
import { Kue } from '../models/kue.model';
import { KueService } from '../services/kue.service';

@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.page.html',
  styleUrls: ['./katalog.page.scss'],
  standalone: false
})
export class KatalogPage implements OnInit {
  daftarKue: Kue[] = [];
  loading = true
  error: string | null = null

  constructor(private kueService: KueService) { }

  ngOnInit() {
    this.loadKue();
  }
  loadKue() {
    this.loading = true
    this.kueService.getAllKue().subscribe({
      next: (data) => {
        this.daftarKue = data;
        this.loading = false
      },
      error: (err) => {
        console.error('Gagal memuat kue:', err);
        this.error = "Gagal memuat data produk. Silakan coba lagi."
        this.loading = false
      }
    });
  }
  formatPrice(price: number): string {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }
}
