// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleCalendarDateSelectionComponent } from './schedule-calendar-date-selection.component';

describe('ScheduleCalendarDateSelectionComponent', () => {
  let component: ScheduleCalendarDateSelectionComponent;
  let fixture: ComponentFixture<ScheduleCalendarDateSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCalendarDateSelectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalendarDateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
