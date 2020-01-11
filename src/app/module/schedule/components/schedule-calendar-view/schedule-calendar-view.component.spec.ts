// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleCalendarViewComponent } from './schedule-calendar-view.component';

describe('ScheduleCalendarViewComponent', () => {
  let component: ScheduleCalendarViewComponent;
  let fixture: ComponentFixture<ScheduleCalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCalendarViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
