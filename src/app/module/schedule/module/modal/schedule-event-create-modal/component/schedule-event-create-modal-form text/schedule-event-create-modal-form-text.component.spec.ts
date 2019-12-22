// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventCreateModalFormTextComponent } from './schedule-event-create-modal-form-text.component';

describe('ScheduleEventCreateModalFormTextComponent', () => {
  let component: ScheduleEventCreateModalFormTextComponent;
  let fixture: ComponentFixture<ScheduleEventCreateModalFormTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventCreateModalFormTextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventCreateModalFormTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
