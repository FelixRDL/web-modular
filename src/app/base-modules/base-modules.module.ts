import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesModule } from '../modules/modules.module';
import { OscillatorComponent } from './oscillator/oscillator.component';
import { OutputComponent } from './output/output.component';
import { RegistryService } from '../modules/registry.service';
import { AudioService } from '../modules/audio.service';
import { MixerComponent } from './mixer/mixer.component';
import { MicrophoneComponent } from './microphone/microphone.component';



@NgModule({
  declarations: [
    OscillatorComponent,
    OutputComponent,
    MixerComponent,
    MicrophoneComponent
  ],
  imports: [
    CommonModule,
    ModulesModule
  ],
  exports: [
    OscillatorComponent,
    OutputComponent,
    MixerComponent,
    MicrophoneComponent
  ],
  providers: [
    RegistryService,
    AudioService
  ]
})
export class BaseModulesModule { }
