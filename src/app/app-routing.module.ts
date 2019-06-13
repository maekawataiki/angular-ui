import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
    pathMatch: "full"
  },
  {
    path: 'components',
    loadChildren: () => import('./pages/demo/demo.module').then(mod => mod.DemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
