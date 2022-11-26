import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepagePageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/game/game.module').then(m => m.GamePageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./pages/config/config.module').then( m => m.ConfigPageModule)
  },  {
    path: 'dev-menu',
    loadChildren: () => import('./pages/dev-menu/dev-menu.module').then( m => m.DevMenuPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
