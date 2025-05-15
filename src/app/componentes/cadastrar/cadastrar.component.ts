import { Component } from '@angular/core';
import { AuthService } from '../../servicos/auth.service';

@Component({
  selector: 'app-cadastrar',
  imports: [],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  email = '';
  nome = '';
  senha = '';
  telefone = '';
  cpf = '';
  dataDeNascimento= '';

  constructor(private authService: AuthService) {}

  async onRegister() {
   try {
    const result = await this.authService.register({
      email: this.email,
      nome: this.nome,
      password: this.senha,
      telefone: this.telefone,
      cpf: this.cpf,
      dataDeNascimento: this.dataDeNascimento
    });
    console.log('Cadastro realizado com sucesso!',result);
   }
   catch (error) {
    console.error('Erro ao cadastrar:', error);
   }
  }
}
