import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/auth'; // ajuste para sua API

  register(user: { nome: string, password: string, email: string, telefone: string, cpf: string, dataDeNascimento: string }) {
    return firstValueFrom(
      this.http.post(`${this.apiUrl}/register`, user)
    );
  }
}
