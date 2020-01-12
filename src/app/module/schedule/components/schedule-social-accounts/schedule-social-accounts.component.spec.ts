// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleSocialAccountsComponent } from './schedule-social-accounts.component';

describe('ScheduleSocialAccountsComponent', () => {
  let component: ScheduleSocialAccountsComponent;
  let fixture: ComponentFixture<ScheduleSocialAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleSocialAccountsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSocialAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
