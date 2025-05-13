import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sobre',
  imports: [TopBarComponent, FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
