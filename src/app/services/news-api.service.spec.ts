import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';

import { NewsApiService } from './news-api.service';

describe('NewsApiService', () => {
  let service: NewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.inject(NewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
