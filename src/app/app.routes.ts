import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login';
import { HomeComponent } from './features/home/home';
import { ConfiguracoesComponent } from './features/configuracoes/configuracoes';
import { CategoriasComponent } from './features/categorias/categorias';
import { MeusLivrosComponent } from './features/meus-livros/meus-livros';
import { PerfilComponent } from './features/perfil/perfil';
import { DesafiosComponent } from './features/desafios/desafios';


export const routes: Routes=[
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent },
    {path: 'configuracoes', component: ConfiguracoesComponent },
    {path: 'categorias', component: CategoriasComponent},
    {path: 'meus-livros', component: MeusLivrosComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'desafios', component: DesafiosComponent}
];
