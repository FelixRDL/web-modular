import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from 'src/app/modules/audio.service';
import { Module } from 'src/app/modules/entities/module';
import { OscillatorDspService } from './oscillator-dsp.service';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss'],
  providers: [
    OscillatorDspService
  ]
})
export class OscillatorComponent implements OnInit {

  @Input()
  model?: Module;

  constructor(
    private audio: AudioService,
    private dsp: OscillatorDspService
  ) { }

  ngOnInit(): void {
    if(!this.model)
      return
    this.model.sockets[0].node = this.dsp.getNode();

    this.control();
  }

  control(): any {
    if(this.model?.data.frequency) {
      this.dsp.setFrequency(this.model?.data.frequency);
    }
  }

  getNode(): any {
    return this.dsp.getNode();
  }

}