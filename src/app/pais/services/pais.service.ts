import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarPorCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url);
  }
  buscarPorCodigo(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }

  buscarPorRegion(termino: string): Observable<Pais[]> {
    //const params=new HttpParams().set('fields','common,capital,cca2,flag,population');

    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Pais[]>(url,);
  }

}