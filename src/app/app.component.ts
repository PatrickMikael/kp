import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  username: string | null = null;
  role: string | null = null;

  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'home', protected: true },
    {
      title: 'Katalog Produk',
      url: '/katalog',
      icon: 'list',
      protected: false,
    },
    {
      title: 'Tambah Customer',
      url: '/tambahcustomer',
      icon: 'person-add',
      protected: false,
    },
    {
      title: 'Daftar Customer',
      url: '/daftarcustomer',
      icon: 'people',
      protected: true,
    },
    {
      title: 'Tambah Pesanan',
      url: '/tambahpesanan',
      icon: 'cart',
      protected: false,
    },
    {
      title: 'Daftar Pesanan',
      url: '/daftarpesanan',
      icon: 'receipt',
      protected: true,
    },
    {
      title: 'Report Sale',
      url: '/report',
      icon: 'clipboard',
      protected: true,
    },
    {
      title: 'Daftar Belum Bayar',
      url: '/daftarbelumbayar',
      icon: 'cash',
      protected: true,
    },
    {
      title: 'Daftar Pembayaran',
      url: '/daftarpembayaran',
      icon: 'checkmark-circle',
      protected: true,
    },
  ];
  constructor(public router: Router) {}

  ngOnInit() {
    this.checkUser();
  }

  checkUser() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        this.username = decoded.username || null;
        this.role = decoded.role || null;
      } catch {
        this.username = null;
        this.role = null;
      }
    } else {
      this.username = null;
      this.role = null;
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const decoded: any = jwtDecode(token);
      return decoded.role === 'admin';
    } catch {
      return false;
    }
  }

  isLoginPage(): boolean {
    return this.router.url.includes('/login');
  }

  logout() {
    localStorage.clear();
    this.username = null;
    this.role = null;
    this.router.navigate(['/']);
  }

  canAccessPage(protectedRoute: boolean): boolean {
    if (!protectedRoute) return true;
    return this.isAdmin();
  }
}
