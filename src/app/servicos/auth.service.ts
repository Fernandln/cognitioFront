import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/'; // ajuste para sua API

  register(user: { nome: string, password: string, email: string, telefone: string, cpf: string, dataDeNascimento: string }) {
    return firstValueFrom(
      this.http.post(`${this.apiUrl}/register`, user)
    );
  }
}
