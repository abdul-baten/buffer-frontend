import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopToolbarComponent } from './dashboard-top-toolbar.component';

describe('DashboardTopToolbarComponent', () => {
  let component: DashboardTopToolbarComponent;
  let fixture: ComponentFixture<DashboardTopToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTopToolbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
