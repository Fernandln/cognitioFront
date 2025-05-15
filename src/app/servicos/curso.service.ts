import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './curso';

export interface CursoResponse {
  content: Curso[];
  totalPages: number;
  number: number;
}
@Injectable({
  providedIn: 'root'
})
export class CursoService  {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/cursos';

  getCursos(page: number = 0, size: number = 16): Observable<CursoResponse> {
    return this.http.get<CursoResponse>(`${this.apiUrl}?page=${page}&size=${size}`);
  }
}
