// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostCreateModalFormImageComponent } from './schedule-post-create-modal-form-image.component';

describe('SchedulePostCreateModalFormImageComponent', () => {
  let component: SchedulePostCreateModalFormImageComponent;
  let fixture: ComponentFixture<SchedulePostCreateModalFormImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostCreateModalFormImageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostCreateModalFormImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
