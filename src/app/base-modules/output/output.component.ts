import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { AudioService } from 'src/app/modules/audio.service';
import { Message, MessageType } from 'src/app/modules/entities/message';
import { Module } from 'src/app/modules/entities/module';
import { Wire } from 'src/app/modules/entities/wire';
import { RegistryService } from 'src/app/modules/registry.service';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Input()
  model?: Module;
  private context: any;

  constructor(
    private registryService: RegistryService,
    private audio: AudioService
    ) { }

  ngOnInit(): void {
    this.init();

    if(!this.model)
      return;
    this.model.sockets[0].node = this.audio.getContext().destination;
  }

  private init() {
    this.initRegistryListener();
  }

  private initRegistryListener() {
    this.registryService.bus
      .pipe(
        filter((message: Message) => message.type == MessageType.wire_added),
        filter((message: Message) => (message.payload as Wire).to.id == this.model?.id)
      )
      .subscribe(x => {
        console.log(x);
      })
  }
}