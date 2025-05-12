import { Component } from '@angular/core';
import { AuthService } from '../../servicos/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password);
  }
}
