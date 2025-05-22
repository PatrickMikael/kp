import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createOrder(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, payload);
  }

  bayarPesanan(payload: {
    idpesanan: number;
    jumlah_bayar: number;
    metode: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment`, payload);
  }

  uploadBuktiBayar(data: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload-bukti`, data);
  }

  getUnpaidOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/belum-bayar`);
  }

  getPendingPayments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pembayaran/menunggu`);
  }

  setLunas(idpembayaran: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/pembayaran/set-lunas`, {
      idpembayaran,
    });
  }
}
