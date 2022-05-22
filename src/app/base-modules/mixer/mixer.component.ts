import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from 'src/app/modules/audio.service';
import { Module } from 'src/app/modules/entities/module';
import { OscillatorDspService } from '../oscillator/oscillator-dsp.service';
import { MixerDspService } from './mixer-dsp.service';

@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.scss'],
  providers: [
    MixerDspService
  ]
})
export class MixerComponent implements OnInit {

  @Input()
  model?: Module;

  constructor(
    private audio: AudioService,
    private dsp: MixerDspService
  ) { }

  ngOnInit(): void {
    if(!this.model)
      return
    this.model.sockets[0].node = this.dsp.getNode();

    this.model.sockets.forEach(s => {
      s.node = this.dsp.getNode();
    })
  }

  getNode(): any {
    return this.dsp.getNode();
  }
}
