import { TestBed, inject } from '@angular/core/testing';

import { GlobalManageService } from './global-manage.service';

describe('GlobalManageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalManageService]
    });
  });

  it('should be created', inject([GlobalManageService], (service: GlobalManageService) => {
    expect(service).toBeTruthy();
  }));
});
