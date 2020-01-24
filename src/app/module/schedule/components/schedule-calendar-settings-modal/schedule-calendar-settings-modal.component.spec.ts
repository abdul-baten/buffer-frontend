// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleCalendarSettingsModalComponent } from './schedule-calendar-settings-modal.component';

describe('ScheduleCalendarSettingsModalComponent', () => {
  let component: ScheduleCalendarSettingsModalComponent;
  let fixture: ComponentFixture<ScheduleCalendarSettingsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCalendarSettingsModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalendarSettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
