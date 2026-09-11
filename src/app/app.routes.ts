import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Redirecionamento inicial padrão
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then(l=> l.LoginComponent)
  }, 
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then(h => h.HomeComponent)
  },
  {
    path: 'meus-livros',
    loadComponent: () => import('./features/meus-livros/meus-livros').then(m => m.MeusLivrosComponent)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./features/perfil/perfil').then(p => p.PerfilComponent)
  },
  {
    path: 'categorias',
    loadComponent: () => import('./features/categorias/categorias').then(c => c.CategoriasComponent)
  },  
  {
    path: 'configuracoes',
    loadComponent: () => import('./features/configuracoes/configuracoes').then(co => co.ConfiguracoesComponent)
  },
  {
    path: 'ADM',
     loadComponent: () => import('./features/admin/admin/admin').then(ad=> ad.AdminComponent)
  }
];