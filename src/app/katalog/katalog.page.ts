import { Component, OnInit } from '@angular/core';
import { Kue } from '../models/kue.model';
import { KueService } from '../services/kue.service';

@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.page.html',
  styleUrls: ['./katalog.page.scss'],
  standalone: false
})
export class KatalogPage implements OnInit {
  daftarKue: Kue[] = [];

  constructor(private kueService: KueService) { }

  ngOnInit() {
    this.loadKue();
  }
  loadKue() {
    this.kueService.getAllKue().subscribe({
      next: (data) => {
        this.daftarKue = data;
      },
      error: (err) => {
        console.error('Gagal memuat kue:', err);
      }
    });
  }
}
