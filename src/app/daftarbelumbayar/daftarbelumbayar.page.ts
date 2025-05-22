import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftarbelumbayar',
  templateUrl: './daftarbelumbayar.page.html',
  styleUrls: ['./daftarbelumbayar.page.scss'],
  standalone: false,
})
export class DaftarbelumbayarPage implements OnInit {

  orders: any[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.loadUnpaidOrders();
  }

  loadUnpaidOrders() {
    this.orderService.getUnpaidOrders().subscribe((res) => {
      this.orders = res;
    });
  }

  goToBayar(id: number) {
    this.router.navigate(['/pembayaran', id]);
  }
}
