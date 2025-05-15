import { Component, inject, OnInit } from '@angular/core';
import { GetUsersService } from '../../servicos/get-users.service';
import { CommonModule } from '@angular/common';
import { CursoService, CursoResponse } from '../../servicos/curso.service';

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
  cursos: any[] = [];
  paginaAtual = 0;
  totalPaginas = 0;

  constructor(private cursoService: CursoService) {}

  ngOnInit() {
    this.carregarCursos();
  }

  carregarCursos() {
    this.cursoService.getCursos(this.paginaAtual).subscribe((res: CursoResponse) => {
      this.cursos = res.content;
      this.totalPaginas = res.totalPages;
    });
  }

  paginaAnterior() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
      this.carregarCursos();
    }
  }

  proximaPagina() {
    if (this.paginaAtual + 1 < this.totalPaginas) {
      this.paginaAtual++;
      this.carregarCursos();
    }
  }
}
