import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-areaprofesssor',
  imports: [],
  templateUrl: './areaprofesssor.component.html',
  styleUrl: './areaprofesssor.component.css'
})
export class AreaprofesssorComponent {
  cursos: any[] = [];
  idUsuarioLogado = 123; // Substitua pelo ID real do usuário logado

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/cursos')
      .subscribe(response => {
        this.cursos = response.filter(curso => curso.usuarioId === this.idUsuarioLogado);
        console.log(this.cursos);
      });
  }
}
