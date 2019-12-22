// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventViewModalTimeComponent } from './schedule-event-view-modal-time.component';

describe('ScheduleEventViewModalTimeComponent', () => {
  let component: ScheduleEventViewModalTimeComponent;
  let fixture: ComponentFixture<ScheduleEventViewModalTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventViewModalTimeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventViewModalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
