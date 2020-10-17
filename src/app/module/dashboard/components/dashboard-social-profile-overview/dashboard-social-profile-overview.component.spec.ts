import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardSocialProfileOverviewComponent } from './dashboard-social-profile-overview.component';

describe('DashboardSocialProfileOverviewComponent', () => {
  let component: DashboardSocialProfileOverviewComponent;
  let fixture: ComponentFixture<DashboardSocialProfileOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSocialProfileOverviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSocialProfileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
