// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleDayCalendarOptionsComponent } from './schedule-day-calendar-options.component';

describe('ScheduleDayCalendarOptionsComponent', () => {
  let component: ScheduleDayCalendarOptionsComponent;
  let fixture: ComponentFixture<ScheduleDayCalendarOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleDayCalendarOptionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDayCalendarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
