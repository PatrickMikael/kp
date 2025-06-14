import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { KueService } from '../services/kue.service';

@Component({
  selector: 'app-stockmanager',
  templateUrl: './stockmanager.page.html',
  styleUrls: ['./stockmanager.page.scss'],
  standalone: false,
})
export class StockmanagerPage implements OnInit {
  menus: any[] = [];
  selectedIdMenu: number | null = null;
  jumlah: number | null = null;
  tanggal: string = '';
  alasan: string = '';

  constructor(
    private stockService: StockService,
    private kueService: KueService
  ) {}

  ngOnInit() {
    this.kueService.getAllKue().subscribe((res) => (this.menus = res));
  }

  tambahStock() {
    if (!this.selectedIdMenu || !this.jumlah || !this.tanggal)
      return alert('Isi semua data');
    this.stockService 
      .tambahStock({
        idmenu: this.selectedIdMenu,
        jumlah: this.jumlah,
        tanggal_masuk: this.tanggal,
      })
      .subscribe(() => alert('Stok masuk berhasil'));
  }

  kurangStock() {
    if (!this.selectedIdMenu || !this.jumlah || !this.tanggal || !this.alasan) return alert('Isi semua data');
    this.stockService.kurangiStock({
      idmenu: this.selectedIdMenu,
      jumlah_keluar: this.jumlah,
      tanggal_keluar: this.tanggal,
      alasan: this.alasan,
    }).subscribe(() => alert('Stok keluar berhasil'));
  }
}
