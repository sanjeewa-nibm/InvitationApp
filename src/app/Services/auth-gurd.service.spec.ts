import { TestBed, inject } from '@angular/core/testing';

import { AuthGurd } from './auth-gurd.service';

describe('AuthGurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGurd]
    });
  });

  it('should be created', inject([AuthGurd], (service: AuthGurd) => {
    expect(service).toBeTruthy();
  }));
});
