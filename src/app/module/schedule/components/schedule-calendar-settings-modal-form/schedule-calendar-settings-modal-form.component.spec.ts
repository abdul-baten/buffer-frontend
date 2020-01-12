// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleCalendarSettingsModalFormComponent } from './schedule-calendar-settings-modal-form.component';

describe('ScheduleCalendarSettingsModalFormComponent', () => {
  let component: ScheduleCalendarSettingsModalFormComponent;
  let fixture: ComponentFixture<ScheduleCalendarSettingsModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCalendarSettingsModalFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalendarSettingsModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
