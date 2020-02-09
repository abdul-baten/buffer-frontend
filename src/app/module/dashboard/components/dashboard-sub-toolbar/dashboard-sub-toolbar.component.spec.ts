import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubToolbarComponent } from './dashboard-sub-toolbar.component';

describe('DashboardSubToolbarComponent', () => {
  let component: DashboardSubToolbarComponent;
  let fixture: ComponentFixture<DashboardSubToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSubToolbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSubToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
