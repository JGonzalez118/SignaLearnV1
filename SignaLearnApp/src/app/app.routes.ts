import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home2',
    loadComponent: () => import('./pages/home2/home2.page').then( m => m.Home2Page)
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'leccion1',
    loadComponent: () => import('./pages/lecciones/L1/leccion1/leccion1.page').then( m => m.Leccion1Page)
  },
  {
    path: 'numeros-p1',
    loadComponent: () => import('./pages/lecciones/L1/numeros-p1/numeros-p1.page').then( m => m.NumerosP1Page)
  },
  {
    path: 'numeros-p2',
    loadComponent: () => import('./pages/lecciones/L1/numeros-p2/numeros-p2.page').then( m => m.NumerosP2Page)
  },
  {
    path: 'leccion1.1',
    loadComponent: () => import('./pages/lecciones/L1/leccion1.1/leccion1.1.page').then( m => m.Leccion11Page)
  },
  {
    path: 'vocales-p1',
    loadComponent: () => import('./pages/lecciones/L1/vocales-p1/vocales-p1.page').then( m => m.VocalesP1Page)
  },
  {
    path: 'prueba-uno',
    loadComponent: () => import('./pages/lecciones/L1/prueba-uno/prueba-uno.page').then( m => m.PruebaUnoPage)
  },
  {
    path: 'prueba-numeros',
    loadComponent: () => import('./pages/lecciones/L1/prueba-numeros/prueba-numeros.page').then( m => m.PruebaNumerosPage)
  },
  {
    path: 'leccion2',
    loadComponent: () => import('./pages/lecciones/L2/leccion2/leccion2.page').then( m => m.Leccion2Page)
  },
  {
    path: 'colores-p1',
    loadComponent: () => import('./pages/lecciones/L2/colores-p1/colores-p1.page').then( m => m.ColoresP1Page)
  },
  {
    path: 'colores-p2',
    loadComponent: () => import('./pages/lecciones/L2/colores-p2/colores-p2.page').then( m => m.ColoresP2Page)
  },
  {
    path: 'leccion2.1',
    loadComponent: () => import('./pages/lecciones/L2/leccion2.1/leccion2.1.page').then( m => m.Leccion21Page)
  },
  {
    path: 'dias',
    loadComponent: () => import('./pages/lecciones/L2/dias/dias.page').then( m => m.DiasPage)
  },
  {
    path: 'prueba-colores',
    loadComponent: () => import('./pages/lecciones/L2/prueba-colores/prueba-colores.page').then( m => m.PruebaColoresPage)
  },
  {
    path: 'prueba-dias-semana',
    loadComponent: () => import('./pages/lecciones/L2/prueba-dias-semana/prueba-dias-semana.page').then( m => m.PruebaDiasSemanaPage)
  },
  {
    path: 'leccion3',
    loadComponent: () => import('./pages/lecciones/L3/leccion3/leccion3.page').then( m => m.Leccion3Page)
  },
  {
    path: 'alimentos-p1',
    loadComponent: () => import('./pages/lecciones/L3/alimentos-p1/alimentos-p1.page').then( m => m.AlimentosP1Page)
  },
  {
    path: 'alimentos-p2',
    loadComponent: () => import('./pages/lecciones/L3/alimentos-p2/alimentos-p2.page').then( m => m.AlimentosP2Page)
  },
  {
    path: 'leccion3.1',
    loadComponent: () => import('./pages/lecciones/L3/leccion3.1/leccion3.1.page').then( m => m.Leccion31Page)
  },
  {
    path: 'p-comunes',
    loadComponent: () => import('./pages/lecciones/L3/p-comunes/p-comunes.page').then( m => m.PComunesPage)
  },
  {
    path: 'prueba-alimentos',
    loadComponent: () => import('./pages/lecciones/L3/prueba-alimentos/prueba-alimentos.page').then( m => m.PruebaAlimentosPage)
  },
  {
    path: 'prueba-palabras',
    loadComponent: () => import('./pages/lecciones/L3/prueba-palabras/prueba-palabras.page').then( m => m.PruebaPalabrasPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  
];
