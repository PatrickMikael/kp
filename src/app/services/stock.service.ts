import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseUrl = 'http://localhost:3000/api/stock';

  constructor(private http: HttpClient) { }

  getAllStocks(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  
  addStock(data: {
      jumlah_masuk: number;
      tanggal_masuk: string;
      nama_menu: string;
    }): Observable<any> {
      return this.http.post(`${this.baseUrl}/addStock`, data);
    } 

  stockOut(data: {
      jumlah_keluar: number;
      tanggal_keluar: string;
      nama_menu: string;
      alasan: string;
    }): Observable<any> {
      return this.http.post(`${this.baseUrl}/addStockOut`, data);
    } 
}
