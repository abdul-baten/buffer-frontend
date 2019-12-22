// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventCreateModalFormMediaSelectionVideoComponent } from './schedule-event-create-modal-form-media-selection-video.component';

describe('ScheduleEventCreateModalFormMediaSelectionVideoComponent', () => {
  let component: ScheduleEventCreateModalFormMediaSelectionVideoComponent;
  let fixture: ComponentFixture<ScheduleEventCreateModalFormMediaSelectionVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventCreateModalFormMediaSelectionVideoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventCreateModalFormMediaSelectionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
