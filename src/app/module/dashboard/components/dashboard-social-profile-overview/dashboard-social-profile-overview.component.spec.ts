import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSocialProfileOverview } from './dashboard-social-profile-overview.component';

describe('DashboardSocialProfileOverview', () => {
  let component: DashboardSocialProfileOverview;
  let fixture: ComponentFixture<DashboardSocialProfileOverview>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSocialProfileOverview],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSocialProfileOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
