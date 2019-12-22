// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventCreateModalFormHeaderComponent } from './schedule-event-create-modal-form-header.component';

describe('ScheduleEventCreateModalFormHeaderComponent', () => {
  let component: ScheduleEventCreateModalFormHeaderComponent;
  let fixture: ComponentFixture<ScheduleEventCreateModalFormHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventCreateModalFormHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventCreateModalFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
