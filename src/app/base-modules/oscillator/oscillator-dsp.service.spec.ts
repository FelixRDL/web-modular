import { TestBed } from '@angular/core/testing';

import { OscillatorDspService } from './oscillator-dsp.service';

describe('OscillatorDspService', () => {
  let service: OscillatorDspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OscillatorDspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
