import { TestBed } from '@angular/core/testing';

import { HttpTestService } from './http-test.service';

describe('HttpTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: HttpTestService = TestBed.get(HttpTestService);
    expect(service).toBeTruthy();
  });
});
