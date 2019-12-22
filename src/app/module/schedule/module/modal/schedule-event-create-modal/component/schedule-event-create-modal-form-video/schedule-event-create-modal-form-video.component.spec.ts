// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventCreateModalFormVideoComponent } from './schedule-event-create-modal-form-video.component';

describe('ScheduleEventCreateModalFormVideoComponent', () => {
  let component: ScheduleEventCreateModalFormVideoComponent;
  let fixture: ComponentFixture<ScheduleEventCreateModalFormVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventCreateModalFormVideoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventCreateModalFormVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
