import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Router } from '@angular/router';
import { KueService } from '../services/kue.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
  standalone: false,
})
export class StockPage implements OnInit {
  stocks: any[] = [];
  menus: any[] = [];

  constructor(private stokService: StockService) { }

  ngOnInit() {
    this.loadStock();
  }

  loadStock() {
    this.stokService.getAllStock().subscribe(res => {
      this.stocks = res;
    });
  }
}
