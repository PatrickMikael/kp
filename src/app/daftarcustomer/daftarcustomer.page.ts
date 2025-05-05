import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-daftarcustomer',
  templateUrl: './daftarcustomer.page.html',
  styleUrls: ['./daftarcustomer.page.scss'],
  standalone: false,
})
export class DaftarcustomerPage implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe({
      next: (res) => {
        this.customers = res;
      },
      error: (err) => {
        console.error('Gagal ambil customer:', err);
      }
    });
  }
}
