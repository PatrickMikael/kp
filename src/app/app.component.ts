import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  username: string | null = null;

  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'home' },
    { title: 'Katalog Produk', url: '/katalog', icon: 'list' },
    { title: 'Tambah Customer', url: '/tambahcustomer', icon: 'person-add' },
    { title: 'Daftar Customer', url: '/daftarcustomer', icon: 'people' },
    { title: 'Tambah Pesanan', url: '/tambahpesanan', icon: 'cart' },
    { title: 'Daftar Pesanan', url: '/daftarpesanan', icon: 'receipt' },
    { title: 'Report Sale', url: '/report', icon: 'clipboard' },
    { title: 'Daftar Belum Bayar', url: '/daftarbelumbayar', icon: 'cash' },
    {
      title: 'Daftar Pembayaran',
      url: '/daftarpembayaran',
      icon: 'checkmark-circle',
    },
  ];
  constructor(public router: Router) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        interface DecodedToken {
          id: number;
          role: string;
          username: string;
          exp: number;
          iat: number;
        }
        const decoded = jwtDecode(token) as DecodedToken;
        this.username = decoded.username || 'Admin';
      } catch (e) {
        console.error('Gagal decode token:', e);
        this.username = null;
      }
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isLoginPage(): boolean {
    return this.router.url.includes('/login');
  }

  logout() {
    localStorage.clear();
    this.username = null;
    this.router.navigate(['/']);
  }
}
