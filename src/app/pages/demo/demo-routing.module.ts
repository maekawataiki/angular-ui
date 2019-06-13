import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  {
    path: '', component: DemoComponent, children: [
      {
        path: 'button',
        loadChildren: () => import('./button/button.module').then(mod => mod.ButtonModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./form/form.module').then(mod => mod.FormModule)
      },
      {
        path: 'stepper',
        loadChildren: () => import('./stepper/stepper.module').then(mod => mod.StepperModule)
      },
      {
        path: '',
        redirectTo: 'button',
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
