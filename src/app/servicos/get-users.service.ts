import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  private http = inject(HttpClient);

  getData(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
