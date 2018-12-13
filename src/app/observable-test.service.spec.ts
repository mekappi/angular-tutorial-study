import { TestBed } from '@angular/core/testing';

import { ObservableTestService } from './observable-test.service';

describe('ObservableTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableTestService = TestBed.get(ObservableTestService);
    expect(service).toBeTruthy();
  });
});
