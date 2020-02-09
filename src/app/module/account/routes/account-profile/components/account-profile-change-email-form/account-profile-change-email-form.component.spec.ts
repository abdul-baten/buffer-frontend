import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileChangeEmailFormComponent } from './account-profile-change-email-form.component';

describe('AccountProfileChangeEmailFormComponent', () => {
  let component: AccountProfileChangeEmailFormComponent;
  let fixture: ComponentFixture<AccountProfileChangeEmailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountProfileChangeEmailFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfileChangeEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
