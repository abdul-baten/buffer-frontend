import { TestBed } from '@angular/core/testing';

import { DocumentMetaService } from './document-meta.service';

describe('DocumentMetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentMetaService = TestBed.get(DocumentMetaService);
    expect(service).toBeTruthy();
  });
});
