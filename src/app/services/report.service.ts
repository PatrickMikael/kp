import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'http://localhost:3000/api/report';

  constructor(private http:HttpClient) { }

  getMonthlySales(): Observable<any[]> {
      return this.http.get<any[]>(this.baseUrl);
    } 

  getCustomerBill(): Observable<any[]> {
      return this.http.get<any[]>(this.baseUrl);
    } 

  getPopularMenu(): Observable<any[]> {
      return this.http.get<any[]>(this.baseUrl);
    } 
}
