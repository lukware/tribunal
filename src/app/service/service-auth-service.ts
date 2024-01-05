import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { JWT } from '../model/JWT';
import { ResponseJWT } from '../model/responseJWT';
import { API_JWT_URL_TEST } from '../shared/constants';
import { LoginRequest } from './loginRequest';


@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {
  constructor(private http: HttpClient) { }

  getJwt(credentials: LoginRequest): Observable<ResponseJWT> {//<JWT[]> {
    // Set headers
    const headers = new HttpHeaders() //.set('Authorization', 'Bearer YourAccessToken')
      .set('Content-Type', 'application/json');
    // Set parameters
    const params = new HttpParams(); //.set('param1', 'value1').set('param2', 'value2');

    //Service Call
    return this.http
      .post<ResponseJWT>(`${API_JWT_URL_TEST}`, credentials)
      .pipe(
        map((resp) => {
          return resp;
          //return resp.Elementos.map(TokenJwt => JWT.Jwt(TokenJwt));
        })
      );
  }
}