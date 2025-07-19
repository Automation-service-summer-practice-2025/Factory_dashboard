import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getStationById(station_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/stations/${station_id}`);
  }

  getStations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stations`);
  }
}
