// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventCreateModalFormComponent } from './schedule-event-create-modal-form.component';

describe('ScheduleEventCreateModalFormComponent', () => {
  let component: ScheduleEventCreateModalFormComponent;
  let fixture: ComponentFixture<ScheduleEventCreateModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventCreateModalFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventCreateModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
