import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileChangeComponent } from './account-profile-change.component';

describe('AccountProfileChangeComponent', () => {
  let component: AccountProfileChangeComponent;
  let fixture: ComponentFixture<AccountProfileChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountProfileChangeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfileChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
