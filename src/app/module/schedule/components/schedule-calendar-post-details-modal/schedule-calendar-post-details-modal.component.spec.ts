// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleCalendarPostDetailsModalComponent } from './schedule-calendar-post-details-modal.component';

describe('ScheduleCalendarPostDetailsModalComponent', () => {
  let component: ScheduleCalendarPostDetailsModalComponent;
  let fixture: ComponentFixture<ScheduleCalendarPostDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCalendarPostDetailsModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalendarPostDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
