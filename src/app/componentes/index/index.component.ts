import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-index',
  imports: [TopBarComponent, FooterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
