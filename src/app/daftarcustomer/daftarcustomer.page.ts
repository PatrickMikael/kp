import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftarcustomer',
  templateUrl: './daftarcustomer.page.html',
  styleUrls: ['./daftarcustomer.page.scss'],
  standalone: false,
})
export class DaftarcustomerPage implements OnInit {
  customers: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private customerService: CustomerService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.error = null;
    this.customerService.getAllCustomers().subscribe({
      next: (res) => {
        this.customers = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Gagal ambil customer:', err);
        console.error('Error:', err);
      }
    });
  }
  createOrder(customer: any) {
    this.router.navigate(['/tambahpesanan'], { state: { customerId: customer.idcustomer } });
  }
  addNewCustomer() {
    this.router.navigate(['/tambahcustomer']);
  }
}
