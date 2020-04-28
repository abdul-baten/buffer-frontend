import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileToolbarComponent } from './profile-toolbar.component';

describe('AccountProfileToolbarComponent', () => {
  let component: AccountProfileToolbarComponent;
  let fixture: ComponentFixture<AccountProfileToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountProfileToolbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
