import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getStationById(station_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/stations/${station_id}`);
  }

  getStations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stations`);
  }

  getStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/status`);
  }

  getWeather(): Observable<any> {
    return this.http.get(`${this.apiUrl}/weather`);
  }

  getElements(): Observable<any> {
    return this.http.get(`${this.apiUrl}/elements`);
  }

  getElementById(elements_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/elements/${elements_id}`);
  }

  getDocuments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/documents`);
  }

  getDocumentById(document_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/documents/${document_id}`);
  }
}
