import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Acta } from '../model/acta';
import { ResponseBusquedaActasJSON } from '../model/responseBusquedaActasJSON';
import { API_ACTAS_URL_LOCAL, API_ACTAS_URL_TEST } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class ServiceActas {
  constructor(private http: HttpClient) {}

  getActas(criterio: string): Observable<Acta[]> {
    // Set headers
    const headers = new HttpHeaders() //.set('Authorization', 'Bearer Creacion e ')
      .set('Content-Type', 'application/json');
    // Set parameters
    const params = new HttpParams(); //.set('param1', 'value1').set('param2', 'value2');
    //Service Call
    return this.http
      .get<ResponseBusquedaActasJSON>(`${API_ACTAS_URL_TEST}${criterio}`, {
        headers,
      })
      .pipe(
        map((resp) => {
          //return resp.Elementos.map(acta => acta);
          return resp.Elementos.map(acta => Acta.actaDesdeJson(acta));
        })
      );
  }
}