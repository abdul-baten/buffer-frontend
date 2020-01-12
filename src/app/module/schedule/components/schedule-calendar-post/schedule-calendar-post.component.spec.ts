// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleCalendarViewPostComponent } from './schedule-calendar-post.component';

describe('ScheduleCalendarViewPostComponent', () => {
  let component: ScheduleCalendarViewPostComponent;
  let fixture: ComponentFixture<ScheduleCalendarViewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCalendarViewPostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalendarViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
