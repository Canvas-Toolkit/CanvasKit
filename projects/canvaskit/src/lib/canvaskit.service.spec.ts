import { TestBed } from '@angular/core/testing';

import { CanvaskitService } from './canvaskit.service';

describe('CanvaskitService', () => {
  let service: CanvaskitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvaskitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
