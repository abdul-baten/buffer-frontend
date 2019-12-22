// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventCreateModalFormImageComponent } from './schedule-event-create-modal-form-image.component';

describe('ScheduleEventCreateModalFormImageComponent', () => {
  let component: ScheduleEventCreateModalFormImageComponent;
  let fixture: ComponentFixture<ScheduleEventCreateModalFormImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventCreateModalFormImageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventCreateModalFormImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
