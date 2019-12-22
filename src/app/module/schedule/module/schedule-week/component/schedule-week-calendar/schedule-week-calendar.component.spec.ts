// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleWeekCalendarComponent } from './schedule-week-calendar.component';

describe('ScheduleWeekCalendarComponent', () => {
  let component: ScheduleWeekCalendarComponent;
  let fixture: ComponentFixture<ScheduleWeekCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleWeekCalendarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleWeekCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
