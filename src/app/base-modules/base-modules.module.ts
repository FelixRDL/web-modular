import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesModule } from '../modules/modules.module';
import { OscillatorComponent } from './oscillator/oscillator.component';



@NgModule({
  declarations: [
    OscillatorComponent
  ],
  imports: [
    CommonModule,
    ModulesModule
  ],
  exports: [
    OscillatorComponent
  ]
})
export class BaseModulesModule { }
