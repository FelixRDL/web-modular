import { Injectable } from '@angular/core';
import { AudioService } from 'src/app/modules/audio.service';

@Injectable({
  providedIn: 'root'
})
export class OscillatorDspService {

  private node: any;

  constructor(
    private audio: AudioService
  ) { 
    this.node = this.audio.getContext().createOscillator();
    this.node.start();
  }

  getNode() {
    return this.node;
  }

  setFrequency(frequency: number) {
    this.node.frequency.setValueAtTime(frequency, this.audio.getContext().currentTime);
  }
}
