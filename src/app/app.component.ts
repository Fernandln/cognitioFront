import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './componentes/top-bar/top-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SobreComponent } from './componentes/sobre/sobre.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent,FooterComponent, SobreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coginitio-front';
}
