import { TestBed } from '@angular/core/testing';

import { EmailPhoneService } from './email-phone.service';

describe('EmailPhoneService', () => {
  let service: EmailPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
