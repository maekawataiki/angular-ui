import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatStepperModule,
    MatGridListModule
} from '@angular/material';

@NgModule({
    exports: [
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatToolbarModule,
        MatRadioModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatStepperModule,
        MatGridListModule
    ]
})
export class AngularMaterialModule { }