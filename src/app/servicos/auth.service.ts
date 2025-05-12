import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  loggedIn$ = this.loggedInSubject.asObservable();

  login(username: string, password: string) {
    // Aqui você faria uma chamada para a API para autenticar o usuário
    // Vamos assumir que a autenticação foi bem-sucedida
    this.loggedInSubject.next(true);
  }

  logout() {
    this.loggedInSubject.next(false);
  }
}
