import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeaderAccountComponent } from './dashboard-header-account.component';

describe('DashboardHeaderAccountComponent', () => {
  let component: DashboardHeaderAccountComponent;
  let fixture: ComponentFixture<DashboardHeaderAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardHeaderAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeaderAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
