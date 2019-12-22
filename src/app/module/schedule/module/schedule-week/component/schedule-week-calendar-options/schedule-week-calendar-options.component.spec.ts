// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleWeekCalendarOptionsComponent } from './schedule-week-calendar-options.component';

describe('ScheduleWeekCalendarOptionsComponent', () => {
  let component: ScheduleWeekCalendarOptionsComponent;
  let fixture: ComponentFixture<ScheduleWeekCalendarOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleWeekCalendarOptionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleWeekCalendarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
