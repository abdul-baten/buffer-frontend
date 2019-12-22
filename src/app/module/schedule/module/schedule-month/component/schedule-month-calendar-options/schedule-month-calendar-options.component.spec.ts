// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleMonthCalendarOptionsComponent } from './schedule-month-calendar-options.component';

describe('ScheduleMonthCalendarOptionsComponent', () => {
  let component: ScheduleMonthCalendarOptionsComponent;
  let fixture: ComponentFixture<ScheduleMonthCalendarOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleMonthCalendarOptionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleMonthCalendarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
