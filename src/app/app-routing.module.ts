import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lisbon',
    loadChildren: () => import('./lisbon/lisbon.module').then( m => m.LisbonPageModule)
  },
  {
    path: 'paris',
    loadChildren: () => import('./paris/paris.module').then( m => m.ParisPageModule)
  },
  {
    path: 'rome',
    loadChildren: () => import('./rome/rome.module').then( m => m.RomePageModule)
  },
  {
    path: 'tokio',
    loadChildren: () => import('./tokio/tokio.module').then( m => m.TokioPageModule)
  },
  {
    path: 'washington',
    loadChildren: () => import('./washington/washington.module').then( m => m.WashingtonPageModule)
  },
  {
    path: 'madrid',
    loadChildren: () => import('./madrid/madrid.module').then( m => m.MadridPageModule)
  },
  {
    path: 'starter',
    loadChildren: () => import('./starter/starter.module').then( m => m.StarterPageModule)
  },
  {
    path: 'credits',
    loadChildren: () => import('./credits/credits.module').then( m => m.CreditsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
