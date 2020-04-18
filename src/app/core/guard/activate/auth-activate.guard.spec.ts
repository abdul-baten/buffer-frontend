import { TestBed, inject } from '@angular/core/testing';

import { AuthActivateGuard } from './auth-activate.guard';

describe('AuthActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthActivateGuard],
    });
  });

  it('should ...', inject([AuthActivateGuard], (guard: AuthActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
