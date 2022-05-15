import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModulesModule } from './base-modules/base-modules.module';
import { ModulesModule } from './modules/modules.module';
import { RegistryService } from './modules/registry.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    BaseModulesModule
  ],
  providers: [
    RegistryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
