import { Routes } from '@angular/router';
import { FaleconoscoComponent } from './componentes/faleconosco/faleconosco.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { IndexComponent } from './componentes/index/index.component';
import { LobbyComponent } from './componentes/lobby/lobby.component';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { AreaprofesssorComponent } from './componentes/areaprofesssor/areaprofesssor.component';
import { AreaAlunoCompraComponent } from './componentes/area-aluno-compra/area-aluno-compra.component';

export const routes: Routes = [
   {path: 'area-aluno-compra', component: AreaAlunoCompraComponent},
    {path: '', component: IndexComponent},
    {path: 'faleconosco', component: FaleconoscoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'lobby', component: LobbyComponent},
    {path: 'Cadastrar', component: CadastrarComponent},
    {path: 'biblioteca', component: BibliotecaComponent},
    { path: 'areaprofesssor', component: AreaprofesssorComponent },
    { path: 'Sobre', component: SobreComponent }

];



      
    


