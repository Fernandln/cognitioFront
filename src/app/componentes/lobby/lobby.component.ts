import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../servicos/curso.service';

@Component({
  selector: 'app-lobby',
  imports: [CommonModule,],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})


export class LobbyComponent  {
  private cursoService = inject(CursoService);
  cursos: any[] = [];
  pagina = 1;
  porPagina = 4;

  get cursosPaginados() {
    const start = (this.pagina - 1) * this.porPagina;
    return this.cursos.slice(start, start + this.porPagina);
  }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(data => (this.cursos = data));
  }

  getYoutubeThumbnail(link: string): string {
    const videoId = this.extractYoutubeId(link);
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  }

  extractYoutubeId(url: string): string {
    const regExp = /(?:\?v=|\/embed\/|\.be\/)([\w\-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  irParaCompra(id: number) {
    window.location.href = `/compra/${id}`;
  }

  proximaPagina() {
    this.pagina++;
  }

  paginaAnterior() {
    this.pagina--;
  }
}