import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class OscillatorComponent implements OnInit, OnChanges {

  @Input()
  model?: Module;

  frequency: number = 440;

  constructor(
    private audio: AudioService,
    private dsp: OscillatorDspService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['frequency']) {
      this.dsp.setFrequency(changes['frequency'].currentValue);
      console.log(changes['frequency'].currentValue);
    }
  }

  ngOnInit(): void {
    if(!this.model)
      return
    this.model.sockets[0].node = this.dsp.getNode();

    this.control();
  }

  debug(event: string) {
    console.log("event change:" + event);
  }

  control(): any {
    if(this.model?.data.frequency) {
      this.dsp.setFrequency(this.model?.data.frequency);
    }
  }

  getNode(): any {
    return this.dsp.getNode();
  }
  setFrequency(evt: number) {
    this.dsp.setFrequency(evt);
  }

}
