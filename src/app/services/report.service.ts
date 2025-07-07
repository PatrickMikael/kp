import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private baseUrl = 'http://localhost:3000/api/report';

  constructor(private http: HttpClient) {}

  getWeeklySales() {
    return this.http.get<any[]>(`${this.baseUrl}/weekly`);
  }

  getMonthlySales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/monthly`);
  }

  getCustomerBill(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tagihan/${id}`);
  }

  getPopularMenus(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/popular`);
  }

  getTotalCustomers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/total-customers`);
  }

  getTotalOrders(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/total-orders`);
  }

  getTotalRevenue(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/total-revenue`);
  }
}
