import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

  link = "http://localhost:3000/api/";

  addCustomer(p_name: string, p_pengirim: string, p_jenis_pesanan: string,): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
   const body = new URLSearchParams();
   body.set('nama', p_name);
   body.set('pengirim', p_pengirim);
   body.set('jenis_pesanan', p_jenis_pesanan);
   const urlEncodedData = body.toString();
    return this.http.post(this.link+"customer", urlEncodedData, { headers });
  }

}
