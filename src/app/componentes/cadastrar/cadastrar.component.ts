import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  imports: [CommonModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  usuario = {
    email: '',
    senha: '',
    telefone: '',
    cpf: '',
    dataDeNascimento: ''
  };

  constructor(private http: HttpClient) { }
  

  cadastrar() {
    this.http.post('http://localhost:8080/api/usuarios', this.usuario)
      .subscribe({
        next: response => {
          console.log('Usuário cadastrado com sucesso!', response);
        },
        error: error => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      });
  }
}
