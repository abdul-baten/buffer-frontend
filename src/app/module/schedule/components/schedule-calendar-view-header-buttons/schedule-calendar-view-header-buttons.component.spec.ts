// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleCalendarViewHeaderButtonsComponent } from './schedule-calendar-view-header-buttons.component';

describe('ScheduleCalendarViewHeaderButtonsComponent', () => {
  let component: ScheduleCalendarViewHeaderButtonsComponent;
  let fixture: ComponentFixture<ScheduleCalendarViewHeaderButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCalendarViewHeaderButtonsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalendarViewHeaderButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
