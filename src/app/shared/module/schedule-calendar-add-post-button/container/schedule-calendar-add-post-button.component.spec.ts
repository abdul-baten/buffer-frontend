// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleCalendarAddPostButtonComponent } from './schedule-calendar-add-post-button.component';

describe('ScheduleCalendarAddPostButtonComponent', () => {
  let component: ScheduleCalendarAddPostButtonComponent;
  let fixture: ComponentFixture<ScheduleCalendarAddPostButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCalendarAddPostButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalendarAddPostButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
