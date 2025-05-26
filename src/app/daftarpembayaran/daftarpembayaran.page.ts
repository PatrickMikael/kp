import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-daftarpembayaran',
  templateUrl: './daftarpembayaran.page.html',
  styleUrls: ['./daftarpembayaran.page.scss'],
  standalone: false,
})
export class DaftarpembayaranPage implements OnInit {

   pembayaran: any[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadPembayaran();
  }

  loadPembayaran() {
    this.orderService.getPendingPayments().subscribe(res => {
      this.pembayaran = res;
    });
  }

  verifikasi(idpembayaran: number) {
    if (confirm('Apakah Anda yakin ingin menandai sebagai lunas?')) {
      this.orderService.setLunas(idpembayaran).subscribe(() => {
        alert('Berhasil ditandai lunas.');
        this.loadPembayaran();
      });
    }
  }

  getBuktiUrl(file: string): string {
    return `http://localhost:3000/uploads/bukti/${file}`;
  }
}
