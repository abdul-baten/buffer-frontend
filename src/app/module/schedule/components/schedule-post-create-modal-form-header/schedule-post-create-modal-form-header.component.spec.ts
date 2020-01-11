// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostCreateModalFormHeaderComponent } from './schedule-post-create-modal-form-header.component';

describe('SchedulePostCreateModalFormHeaderComponent', () => {
  let component: SchedulePostCreateModalFormHeaderComponent;
  let fixture: ComponentFixture<SchedulePostCreateModalFormHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostCreateModalFormHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostCreateModalFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
