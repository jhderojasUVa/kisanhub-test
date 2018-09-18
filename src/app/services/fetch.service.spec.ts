import { TestBed, inject } from '@angular/core/testing';

import { FetchserviceService } from './fetchservice.service';

describe('FetchserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchserviceService]
    });
  });

  it('should be created', inject([FetchserviceService], (service: FetchserviceService) => {
    expect(service).toBeTruthy();
  }));
});
