import { Component, inject, OnInit } from '@angular/core';
import { GetUsersService } from '../../servicos/get-users.service';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  email: string;
}
@Component({
  selector: 'app-lobby',
  imports: [CommonModule],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})


export class LobbyComponent implements OnInit {
  private getUsersService = inject(GetUsersService);
  public users: User[] = [];

  ngOnInit() {
    this.getUsersService.getData().subscribe((response: User[]) => {
      this.users = response;
    });
  }
}
