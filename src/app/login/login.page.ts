import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.auth
      .login({ username: this.username, password: this.password })
      .subscribe({
        next: (res) => {
          const token = res.token;

          localStorage.setItem('token', res.token);
          alert('Login berhasil!');
          localStorage.setItem('token', res.token);
          localStorage.setItem('username', res.username);
          localStorage.setItem('role', res.role);
          const decoded: any = jwtDecode(token);
          localStorage.setItem('username', decoded.username);
          localStorage.setItem('role', decoded.role);
          this.auth.loginSuccess(res.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login gagal:', err);
          alert(err.error?.error || 'Login gagal');
        },
      });
  }
}
