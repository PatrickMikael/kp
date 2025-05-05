import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kue } from '../models/kue.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KueService {
  private baseUrl = 'http://localhost:3000/api/menu';

  constructor(private http: HttpClient) { }

  getAllKue(): Observable<Kue[]> {
    return this.http.get<Kue[]>(this.baseUrl);
  }
}
