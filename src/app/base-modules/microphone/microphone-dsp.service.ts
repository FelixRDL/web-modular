import { Injectable } from '@angular/core';
import { AudioService } from 'src/app/modules/audio.service';

@Injectable({
  providedIn: 'root'
})
export class MicrophoneDspService {

  private node: any;

  constructor(
    private audio: AudioService
  ) { 
  }

  public async getNode() {
    const media = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.node = this.audio.getContext().createMediaStreamSource(media);
    return this.node;
  }
}
