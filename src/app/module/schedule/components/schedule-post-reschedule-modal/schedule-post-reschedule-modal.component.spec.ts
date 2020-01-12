// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { SchedulePostRescheduleModalComponent } from './schedule-post-reschedule-modal.component';

describe('SchedulePostRescheduleModalComponent', () => {
  let component: SchedulePostRescheduleModalComponent;
  let fixture: ComponentFixture<SchedulePostRescheduleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostRescheduleModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostRescheduleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
