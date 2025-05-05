import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:3000/api/customers';

  constructor(private http: HttpClient) {}

  createCustomer(data: {
    nama: string;
    pengirim: string;
    jenis_pesanan: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, data);
  } 

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  } 
}
