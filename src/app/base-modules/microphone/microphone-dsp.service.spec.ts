import { TestBed } from '@angular/core/testing';

import { MicrophoneDspService } from './microphone-dsp.service';

describe('MicrophoneDspService', () => {
  let service: MicrophoneDspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrophoneDspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
