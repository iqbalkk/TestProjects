/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicinetableService } from './medicinetable.service';

describe('MedicinetableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicinetableService]
    });
  });

  it('should ...', inject([MedicinetableService], (service: MedicinetableService) => {
    expect(service).toBeTruthy();
  }));
});
