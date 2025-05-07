import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftarpesanan',
  templateUrl: './daftarpesanan.page.html',
  styleUrls: ['./daftarpesanan.page.scss'],
  standalone: false,
})
export class DaftarpesananPage implements OnInit {
  orders: any[] = [];
  loading = true
  error: string | null = null
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.loading = true
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data
        this.loading = false
      },
      error: (err) => {
        console.error("Error fetching orders", err)
        this.error = "Gagal memuat data pesanan. Silakan coba lagi."
        this.loading = false
      },
    })
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  getStatusColor(status: string): string {
    if (!status) {
      return 'gray'; 
    }
  
    const lowerStatus = status.toLowerCase();
  
    if (lowerStatus === 'selesai') {
      return 'success';
    } else if (lowerStatus === 'pending') {
      return 'warning';
    } else if (lowerStatus === 'dibatalkan') {
      return 'danger';
    }
  
    return 'primary';
  }

  addNewOrder() {
    this.router.navigate(["/tambahpesanan"])
  }
}
