// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventCreateModalFormMediaSelectionComponent } from './schedule-event-create-modal-form-media-selection.component';

describe('ScheduleEventCreateModalFormMediaSelectionComponent', () => {
  let component: ScheduleEventCreateModalFormMediaSelectionComponent;
  let fixture: ComponentFixture<ScheduleEventCreateModalFormMediaSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventCreateModalFormMediaSelectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventCreateModalFormMediaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
