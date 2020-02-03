import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileChangePasswordFormComponent } from './account-profile-change-password-form.component';

describe('AccountProfileChangePasswordFormComponent', () => {
  let component: AccountProfileChangePasswordFormComponent;
  let fixture: ComponentFixture<AccountProfileChangePasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountProfileChangePasswordFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfileChangePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
