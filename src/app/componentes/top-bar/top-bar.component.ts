import { Observable, of } from 'rxjs';
import { AuthService } from './../../servicos/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  // isLoggedIn$: Observable<boolean>

  // constructor(private authService: AuthService) {
  //   this.isLoggedIn$ = this.authService.loggedIn$;

  // }

  isLoggedIn$ = of(false);

  onLogout() {
    // this.authService.logout();
    console.log("logout clicado")
  }
}
