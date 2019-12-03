import { TestBed } from '@angular/core/testing';

import { KeyboardEventService } from './keyboard-event.service';

describe('TitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyboardEventService = TestBed.get(KeyboardEventService);
    expect(service).toBeTruthy();
  });
});
