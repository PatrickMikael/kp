import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-daftarpesanan',
  templateUrl: './daftarpesanan.page.html',
  styleUrls: ['./daftarpesanan.page.scss'],
  standalone: false,
})
export class DaftarpesananPage implements OnInit {
  orders: any[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe({
      next: (res) => this.orders = res,
      error: (err) => console.error('Gagal ambil pesanan:', err)
    });
  }
}
