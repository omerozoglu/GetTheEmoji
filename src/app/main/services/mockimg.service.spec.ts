import { TestBed } from '@angular/core/testing';

import { MockimgService } from './mockimg.service';

describe('MockimgService', () => {
  let service: MockimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
