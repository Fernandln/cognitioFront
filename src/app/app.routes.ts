import { Routes } from '@angular/router';
import { FaleconoscoComponent } from './componentes/faleconosco/faleconosco.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { IndexComponent } from './componentes/index/index.component';
import { SobreComponent } from './componentes/sobre/sobre.component';

export const routes: Routes = [
    {path: '', component: IndexComponent},
    // {path: 'faleconosco', component: FaleconoscoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'Cadastrar', component: CadastrarComponent},
    {path: 'Sobre', component: SobreComponent}

];
