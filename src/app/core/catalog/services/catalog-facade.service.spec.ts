import { TestBed } from '@angular/core/testing';

import { CatalogFacadeService } from './catalog-facade.service';

describe('CatalogFacadeService', () => {
  let service: CatalogFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
