import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrespondenciaService {

  url = 'http://localhost:8080/correspondencia-api/v1'

  constructor(private http: HttpClient) { }

  getCorrespondencia() {
    return this.http.get<any>(`${this.url}/`);
  }
}
