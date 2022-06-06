import { TestBed } from '@angular/core/testing';

import { WebAppApiService } from './web-app-api.service';

describe('WebAppApiService', () => {
  let service: WebAppApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebAppApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
