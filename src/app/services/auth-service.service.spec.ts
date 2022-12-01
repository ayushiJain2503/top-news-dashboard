import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AuthServiceService } from './auth-service.service';
import { SessionTimeoutService } from './session-timeout.service';

describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [provideMockStore({}), SessionTimeoutService]
    });
    service = TestBed.inject(AuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
