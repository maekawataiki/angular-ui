import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepperRoutingModule,
    AngularMaterialModule
  ]
})
export class StepperModule { }
