import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SessionTimeoutService } from './session-timeout.service';

describe('SessionTimeoutService', () => {
  let service: SessionTimeoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})]
    });
    service = TestBed.inject(SessionTimeoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
