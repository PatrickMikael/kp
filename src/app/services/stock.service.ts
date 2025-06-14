import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private baseUrl = 'http://localhost:3000/api/stock';

  constructor(private http: HttpClient) {}

  getAllStock(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  tambahStock(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, data);
  }

  kurangiStock(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/stock/out', data);
  }
}
