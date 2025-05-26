import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
  standalone: false,
})
export class StockPage implements OnInit {
  stocks: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private stockService: StockService, 
      private router: Router) { }

  ngOnInit() {
    this.loadStocks();
  }

  loadStocks() {
    this.loading = true;
    this.error = null;
    this.stockService.getAllStocks().subscribe({
      next: (res) => {
        this.stocks = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Gagal ambil stock:', err);
        console.error('Error:', err);
      }
    });
  }

}
