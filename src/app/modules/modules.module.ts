import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { SocketComponent } from './socket/socket.component';
import { WireComponent } from './wire/wire.component';
import { RegistryService } from './registry.service';



@NgModule({
  declarations: [
    BaseComponent,
    SocketComponent,
    WireComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseComponent,
    SocketComponent,
    WireComponent
  ],
  providers: [
    RegistryService
  ]
})
export class ModulesModule { }
