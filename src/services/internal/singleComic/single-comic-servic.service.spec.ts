import { TestBed } from '@angular/core/testing';

import { SingleComicServicService } from './single-comic-servic.service';

describe('SingleComicServicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleComicServicService = TestBed.get(SingleComicServicService);
    expect(service).toBeTruthy();
  });
});
