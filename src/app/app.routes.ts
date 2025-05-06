import { Routes } from '@angular/router';
import { FaleconoscoComponent } from './componentes/faleconosco/faleconosco.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { LobbyComponent } from './componentes/lobby/lobby.component';

export const routes: Routes = [
    {path: '', component: FaleconoscoComponent},
    // {path: 'faleconosco', component: FaleconoscoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'lobby', component: LobbyComponent},
    {path: 'Cadastrar', component: CadastrarComponent}

];
