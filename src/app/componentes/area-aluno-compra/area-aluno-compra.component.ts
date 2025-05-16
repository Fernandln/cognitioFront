import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-area-aluno-compra',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './area-aluno-compra.component.html',
  styleUrls: ['./area-aluno-compra.component.css']
})
export class AreaAlunoCompraComponent {
  compraFinalizada = false;

  finalizarCompra() {
    this.compraFinalizada = true;
    setTimeout(() => {
      this.compraFinalizada = false;
    }, 200000);
  }
}
