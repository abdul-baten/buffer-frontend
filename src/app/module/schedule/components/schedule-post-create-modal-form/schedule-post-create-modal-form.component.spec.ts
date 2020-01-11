// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostCreateModalFormComponent } from './schedule-post-create-modal-form.component';

describe('SchedulePostCreateModalFormComponent', () => {
  let component: SchedulePostCreateModalFormComponent;
  let fixture: ComponentFixture<SchedulePostCreateModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostCreateModalFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostCreateModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
