import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';

  
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  loginSuccess(token: string) {
    localStorage.setItem('token', token);
    this.checkToken(); 
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        this.userSubject.next(decoded); 
      } catch {
        this.userSubject.next(null);
      }
    } else {
      this.userSubject.next(null);
    }
  }

  logout() {
    localStorage.clear();
    this.userSubject.next(null);
  }
  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
