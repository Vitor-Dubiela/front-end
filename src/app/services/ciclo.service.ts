import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciclo } from '../models/Ciclo';

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/'

  listar(): Observable<Ciclo[]>{
    return this.http.get<Ciclo[]>(`${this.baseUrl}`)
  }

  cadastrar(ciclo: Ciclo): Observable<Ciclo>{
    return this.http.post<Ciclo>(`${this.baseUrl}cadastrar`, ciclo)
  }

  deletarComputador(id: string): Observable<Ciclo[]> {
    return this.http.delete<Ciclo[]>(`${this.baseUrl}excluir/${id}`);
  }
}
