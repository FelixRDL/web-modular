import { Injectable } from '@angular/core';

declare const window: any;

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private context: any;

  constructor() {
    this.initContext();
  }
  private initContext() {
    try {
      // Fix up for prefixing
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.context = new AudioContext();
    } catch (e) {
      alert('Web Audio API is not supported in this browser');
    }
  }

  public getContext() {
    return this.context;
  }
}
