// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { SchedulePostRescheduleConfirmModalComponent } from './schedule-post-reschedule-confirm-modal.component';

describe('SchedulePostRescheduleConfirmModalComponent', () => {
  let component: SchedulePostRescheduleConfirmModalComponent;
  let fixture: ComponentFixture<SchedulePostRescheduleConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostRescheduleConfirmModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostRescheduleConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
