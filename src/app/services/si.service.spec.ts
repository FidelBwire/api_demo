import { TestBed } from '@angular/core/testing';

import { SiService } from './si.service';

describe('SiService', () => {
  let service: SiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
