// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventCreateModalFormTypeComponent } from './schedule-event-create-modal-form-type.component';

describe('ScheduleEventCreateModalFormTypeComponent', () => {
  let component: ScheduleEventCreateModalFormTypeComponent;
  let fixture: ComponentFixture<ScheduleEventCreateModalFormTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventCreateModalFormTypeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventCreateModalFormTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
