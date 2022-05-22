import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from 'src/app/modules/audio.service';
import { Module } from 'src/app/modules/entities/module';
import { MicrophoneDspService } from './microphone-dsp.service';

@Component({
  selector: 'app-microphone',
  templateUrl: './microphone.component.html',
  styleUrls: ['./microphone.component.scss'],
  providers: [
    MicrophoneDspService
  ]
})
export class MicrophoneComponent implements OnInit {


  @Input()
  model?: Module;

  constructor(
    private audio: AudioService,
    private dsp: MicrophoneDspService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private async init() {
    if(!this.model)
      return
    this.model.sockets[0].node = await this.dsp.getNode();

    this.control();
  }

  control(): any {
  }

  getNode(): any {
    return this.dsp.getNode();
  }

}
