// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostCreateModalFormTypeComponent } from './schedule-post-create-modal-form-type.component';

describe('SchedulePostCreateModalFormTypeComponent', () => {
  let component: SchedulePostCreateModalFormTypeComponent;
  let fixture: ComponentFixture<SchedulePostCreateModalFormTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostCreateModalFormTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostCreateModalFormTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
