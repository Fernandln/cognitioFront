import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  imports: [CommonModule],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent{
  imcomplete: any[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos/')
      .subscribe(response => {
        this.imcomplete = response.filter((todo => todo.completed));
        console.log(this.imcomplete);
      });
        
    } 
  }