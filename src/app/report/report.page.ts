import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
  standalone:false
})
export class ReportPage implements OnInit {
  ditampilkan:string = "reportsale";
  reportsale: any[] = [];
  customerbill: any[] = [];
  popularmenu: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private reportservice: ReportService, private router:Router) { }

  ngOnInit() {
    this.loadReportSales();
    this.loadCustomerBill();
    this.loadPopularMenu();
  }

  loadReportSales() {
    this.loading = true;
    this.error = null;
    this.reportservice.getMonthlySales().subscribe({
      next: (res) => {
        this.reportsale = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Gagal ambil report:', err);
        console.error('Error:', err);
      }
    });
  }

  loadCustomerBill() {
    this.loading = true;
    this.error = null;
    this.reportservice.getCustomerBill().subscribe({
      next: (res) => {
        this.customerbill = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Gagal ambil tagihan customer:', err);
        console.error('Error:', err);
      }
    });
  }
  loadPopularMenu() {
    this.loading = true;
    this.error = null;
    this.reportservice.getPopularMenu().subscribe({
      next: (res) => {
        this.popularmenu = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Gagal ambil popular menu:', err);
        console.error('Error:', err);
      }
    });
  }
}
