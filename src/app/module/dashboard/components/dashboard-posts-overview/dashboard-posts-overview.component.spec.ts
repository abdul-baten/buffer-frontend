import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardPostsOverviewComponent } from './dashboard-posts-overview.component';

describe('DashboardPostsOverviewComponent', () => {
  let component: DashboardPostsOverviewComponent;
  let fixture: ComponentFixture<DashboardPostsOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPostsOverviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPostsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
