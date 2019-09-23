import { Routes, RouterModule } from "@angular/router";
import { CaixaDeEntradaComponent } from './app/modules/caixa-de-entrada/caixa-de-entrada.component';
import { CadastroComponent } from './app/modules/cadastro/cadastro.component';
import { LoginComponent } from './app/modules/login/login.component';



const rotasApp:Routes = [
    {path: '', component: CaixaDeEntradaComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: LoginComponent} //rota coringa sempre por ultimo
];
export const ModuleRoteamento = RouterModule.forRoot(rotasApp)