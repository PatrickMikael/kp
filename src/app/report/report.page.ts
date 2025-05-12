import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
  standalone: false,
})
export class ReportPage implements OnInit {
  monthlySales: any[] = [];
  popularMenus: any[] = [];
  customerBills: any[] = [];

  customers: any[] = [];
  selectedCustomerId: number = 0;

  // Filter periode
  selectedPeriod = 'month';

  loading: boolean = false;
  billLoading: boolean = false;

  totalRevenue: number = 0;
  totalOrders: number = 0;
  totalCustomers: number = 0;

  constructor(
    private reportService: ReportService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.loadTotalCustomers();
    this.loadTotalOrders();
    this.loadTotalRevenue();
    this.loadPopularMenus();
    this.loadMonthlySales();
    this.loadCustomers();
  }

  loadTotalRevenue() {
    this.reportService.getTotalRevenue().subscribe((res) => {
      this.totalRevenue = res?.total || res[0]?.total || 0;
    });
  }

  loadTotalOrders() {
    this.reportService.getTotalOrders().subscribe((res) => {
      this.totalOrders = res?.total || res[0]?.total || 0;
    });
  }

  loadPopularMenus() {
    this.reportService.getPopularMenus().subscribe((res) => {
      this.popularMenus = res;
    });
  }

  // Load total penjualan bulanan per menu
  loadMonthlySales() {
    this.loading = true;
    this.reportService.getMonthlySales().subscribe({
      next: (res) => {
        this.monthlySales = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.monthlySales = [];
      },
    });
  }

  // Load semua customer (untuk filter tagihan)
  loadCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
    });
  }

  // Ambil tagihan customer tertentu
  loadCustomerBill() {
    if (!this.selectedCustomerId) return; // Cegah jika belum pilih customer

    this.billLoading = true;

    this.reportService.getCustomerBill(this.selectedCustomerId).subscribe({
      next: (res) => {
        this.customerBills = res;
        this.billLoading = false;
      },
      error: () => {
        this.billLoading = false;
        this.customerBills = [];
      },
    });
  }

  // Format harga ke IDR
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  }

  // Format tanggal
  formatDate(value: string): string {
    return new Date(value).toLocaleDateString('id-ID', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  getMonthName(monthNumber: number): string {
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    return months[monthNumber - 1];
  }

  getBillStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'selesai':
        return 'success';
      case 'diproses':
        return 'warning';
      case 'dibatalkan':
        return 'danger';
      default:
        return 'medium';
    }
  }

  refreshData() {
    this.loadPopularMenus();
    this.loadMonthlySales();
    this.loadCustomers();
    if (this.selectedCustomerId) {
      this.loadCustomerBill();
    }
  }

  periodChanged() {
    // Implementasi filter berdasarkan periode
    this.loadPopularMenus();
    this.loadMonthlySales();
  }

  loadTotalCustomers() {
    this.reportService.getTotalCustomers().subscribe((res) => {
      this.totalCustomers = res[0]?.total || 0;
    });
  }
}
