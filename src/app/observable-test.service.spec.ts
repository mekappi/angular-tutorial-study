import { TestBed } from '@angular/core/testing';

import { ObservableTestService } from './observable-test.service';

describe('ObservableTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ObservableTestService = TestBed.get(ObservableTestService);
    expect(service).toBeTruthy();
  });
});
