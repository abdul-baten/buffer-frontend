import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSocialPerformanceComponent } from './dashboard-social-performance.component';

describe('DashboardSocialPerformanceComponent', () => {
  let component: DashboardSocialPerformanceComponent;
  let fixture: ComponentFixture<DashboardSocialPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSocialPerformanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSocialPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
