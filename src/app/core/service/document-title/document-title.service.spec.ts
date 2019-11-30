import { TestBed } from '@angular/core/testing';

import { DocumentTitleService } from './document-title.service';

describe('TitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentTitleService = TestBed.get(DocumentTitleService);
    expect(service).toBeTruthy();
  });
});
