import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private API_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.isLoggedInSubject.next(!!token);
  }

  login(username: string, password: string) {
    const loginPayload = {
      email: username,
      senha: password
    };

    return this.http.post<{ token: string }>(`${this.API_URL}/login`, loginPayload)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
          this.isLoggedInSubject.next(true);
        })
      )
      .subscribe({
        next: () => console.log('Login bem-sucedido'),
        error: (err) => {
          console.error('Erro ao fazer login', err);
          this.isLoggedInSubject.next(false);
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }
}