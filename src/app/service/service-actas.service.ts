import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ACTAS_URL_LOCAL } from '../shared/constants';
import { Acta } from '../model/acta';

@Injectable({
  providedIn: 'root',
})
export class ServiceActas {
  constructor(private http: HttpClient) {}

  getActas(criterio: string): Observable<any> {
    // Set headers
    const headers = new HttpHeaders()
      //.set('Authorization', 'Bearer YourAccessToken')
      .set('Content-Type', 'application/json');
    // Set parameters
    const params = new HttpParams();
    //.set('param1', 'value1')
    //.set('param2', 'value2');

    return this.http.get<any>(`${API_ACTAS_URL_LOCAL}${criterio}`, { headers });
  }
}