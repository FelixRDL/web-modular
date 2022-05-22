import { TestBed } from '@angular/core/testing';

import { MixerDspService } from './mixer-dsp.service';

describe('MixerDspService', () => {
  let service: MixerDspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MixerDspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
