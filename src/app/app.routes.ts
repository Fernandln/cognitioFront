import { Routes } from '@angular/router';
import { FaleconoscoComponent } from './componentes/faleconosco/faleconosco.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { IndexComponent } from './componentes/index/index.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { AreaprofesssorComponent } from './componentes/areaprofesssor/areaprofesssor.component';


    export const routes: Routes = [
        { path: '', redirectTo: 'areaprofesssor', pathMatch: 'full' },
        { path: 'areaprofesssor', component: AreaprofesssorComponent },
        { path: 'faleconosco', component: FaleconoscoComponent },
        { path: 'login', component: LoginComponent },
        { path: 'Cadastrar', component: CadastrarComponent },
        { path: 'Sobre', component: SobreComponent }
      ];
      
    


