import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockmanager',
  templateUrl: './stockmanager.page.html',
  styleUrls: ['./stockmanager.page.scss'],
  standalone: false,
})
export class StockmanagerPage implements OnInit {

  constructor(private stockService: StockService,
      private router: Router) { }

    stockmasuk = {
      jumlah_masuk: 0,
      tanggal_masuk: '', //harusnya bukan diisi manual
      nama_menu: '', //diganti kalo nggak sesuai
  }

    stockkeluar = {
      jumlah_keluar: 0,
      tanggal_keluar: '', //sama
      nama_menu: '', //diganti kalo nggak sesuai
      alasan: '',
  }
  submitting: boolean = false;
  
  ngOnInit() {
  }

  tambahStock() {
    if (
      this.stockmasuk.jumlah_masuk.toString()=== '' || //aku nggak tahu
      this.stockmasuk.tanggal_masuk.trim() === '' ||
      this.stockmasuk.nama_menu.trim() === ''
    ) {
      alert('Semua data harus diisi');
      return;
    }
    
    this.submitting = true;
    this.stockService.addStock(this.stockmasuk).subscribe({
      next: (res) => {
        alert('stock berhasil dikurangkan');
        this.router.navigate(['/']); 
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Gagal menngurangi stock');
      },
      complete: () => {
        this.submitting = false;
      }
    });
  }

  kurangiStock() {
    if (
      this.stockkeluar.jumlah_keluar.toString()=== '' || //aku nggak tahu
      this.stockkeluar.tanggal_keluar.trim() === '' ||
      this.stockkeluar.nama_menu.trim() === '' ||
      this.stockkeluar.alasan.trim() === ''
    ) {
      alert('Semua data harus diisi');
      return;
    }
    
    this.submitting = true;
    this.stockService.stockOut(this.stockkeluar).subscribe({
      next: (res) => {
        alert('stock berhasil dikurangkan');
        this.router.navigate(['/']); 
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Gagal menngurangi stock');
      },
      complete: () => {
        this.submitting = false;
      }
    });
  }
}
