import { TestBed } from '@angular/core/testing';

import { BreadcrumbServiceService } from './breadcrumb-service.service';

describe('BreadcrumbServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadcrumbServiceService = TestBed.get(BreadcrumbServiceService);
    expect(service).toBeTruthy();
  });
});
