import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-pembayaran',
  templateUrl: './pembayaran.page.html',
  styleUrls: ['./pembayaran.page.scss'],
  standalone: false,
})
export class PembayaranPage implements OnInit {
  idpesanan!: number;
  hargaTotal: number = 0;
  jumlahBayar: number = 0;
  metode: string = '';
  loading = false;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.idpesanan = Number(this.route.snapshot.paramMap.get('id'));
    this.loadOrder();
  }
  loadOrder() {
    this.orderService.getOrderById(this.idpesanan).subscribe((res) => {
      this.hargaTotal = res.order.harga_total;
    });
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  submitPembayaran() {
    if (!this.selectedFile) {
      alert('Silakan upload bukti pembayaran terlebih dahulu.');
      return;
    }

    const formData = new FormData();
    formData.append('idpesanan', this.idpesanan.toString());
    formData.append('jumlah_bayar', this.hargaTotal.toString());
    formData.append('metode', this.metode || 'Transfer');
    formData.append('bukti_bayar', this.selectedFile);

    this.orderService.uploadBuktiBayar(formData).subscribe({
      next: () => {
        alert('Bukti pembayaran berhasil dikirim! Menunggu verifikasi admin.');
        this.router.navigate(['/katalog']);
      },
      error: (err) => {
        console.error(err);
        alert('Gagal upload bukti pembayaran.');
      },
    });
  }
}
