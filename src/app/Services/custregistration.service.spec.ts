/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustregistrationService } from './custregistration.service';

describe('Service: Custregistration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustregistrationService]
    });
  });

  it('should ...', inject([CustregistrationService], (service: CustregistrationService) => {
    expect(service).toBeTruthy();
  }));
});
