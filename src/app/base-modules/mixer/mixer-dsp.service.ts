import { Injectable } from '@angular/core';
import { AudioService } from 'src/app/modules/audio.service';

@Injectable({
  providedIn: 'root'
})
export class MixerDspService {

  private node: any;

  constructor(
    private audio: AudioService
  ) { 
    this.node = this.audio.getContext().createGain();
  }

  getNode() {
    return this.node;
  }

}
