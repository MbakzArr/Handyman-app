import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getNearbyHandymen(lat: number, lng: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/handymen/nearby?lat=${lat}&lng=${lng}`);
  }

  getHandymanById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/handyman/${id}`);
  }
  

  // bookHandyman(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/bookings`, data);
  // }

  bookHandyman(payload: any) {
    return this.http.post(`${this.apiUrl}/bookings`, payload);
  }
  
  
  getHandymanDetails(id: number) {
    return this.http.get(`http://localhost:8000/api/handyman/${id}`);
  }
  
}
