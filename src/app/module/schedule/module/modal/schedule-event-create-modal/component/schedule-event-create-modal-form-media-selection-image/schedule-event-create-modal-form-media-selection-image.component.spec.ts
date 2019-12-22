// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventCreateModalFormMediaSelectionImageComponent } from './schedule-event-create-modal-form-media-selection-image.component';

describe('ScheduleEventCreateModalFormMediaSelectionImageComponent', () => {
  let component: ScheduleEventCreateModalFormMediaSelectionImageComponent;
  let fixture: ComponentFixture<ScheduleEventCreateModalFormMediaSelectionImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventCreateModalFormMediaSelectionImageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventCreateModalFormMediaSelectionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
