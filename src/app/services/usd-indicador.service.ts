import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsdIndicadorService {

  constructor(
    private http: HttpClient
  ) { }

  getUSDIndicator() {
    return this.http.get(`https://mindicador.cl/api/dolar/`);
  }
}
