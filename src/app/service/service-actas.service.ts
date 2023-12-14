import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Elemento, ResponseBusquedaActasJSON } from '../model/responseBusquedaActasJSON';
import { API_ACTAS_URL_LOCAL } from '../shared/constants';
import { Acta } from '../model/acta';

@Injectable({
  providedIn: 'root',
})
export class ServiceActas {
  constructor(private http: HttpClient) {}

  getActas(criterio: string): Observable<Acta[]> {
    // Set headers
    const headers = new HttpHeaders()
      //.set('Authorization', 'Bearer YourAccessToken')
      .set('Content-Type', 'application/json');
    // Set parameters
    const params = new HttpParams();
    //.set('param1', 'value1')
    //.set('param2', 'value2');

    //return this.http.get<ResponseBusquedaActasJSON>(`${API_ACTAS_URL_LOCAL}${criterio}`, { headers });

    /*return this.http.get<ResponseActas>
      (`${API_ACTAS_URL_LOCAL}${criterio}`, { headers }).pipe(
        map( resp => {
          return resp.map( (acta: Object) => Acta.actaDesdeJson(acta))
        }
      )*/
        return this.http.get<ResponseBusquedaActasJSON>(`${API_ACTAS_URL_LOCAL}${criterio}`, { headers })
        .pipe(
          map( resp =>{
            //return resp.Elementos.map(acta => acta);
            return resp.Elementos.map(acta => Acta.actaDesdeJson(acta));
            }));
          
      
      
  }
}