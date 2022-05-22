import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { SocketComponent } from './socket/socket.component';
import { WireComponent } from './wire/wire.component';
import { RegistryService } from './registry.service';
import { KnobComponent } from './knob/knob.component';



@NgModule({
  declarations: [
    BaseComponent,
    SocketComponent,
    WireComponent,
    KnobComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseComponent,
    SocketComponent,
    WireComponent,
    KnobComponent
  ],
  providers: [
    RegistryService
  ]
})
export class ModulesModule { }
