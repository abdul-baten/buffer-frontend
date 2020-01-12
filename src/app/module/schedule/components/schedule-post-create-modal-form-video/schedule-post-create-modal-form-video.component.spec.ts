// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostCreateModalFormVideoComponent } from './schedule-post-create-modal-form-video.component';

describe('SchedulePostCreateModalFormVideoComponent', () => {
  let component: SchedulePostCreateModalFormVideoComponent;
  let fixture: ComponentFixture<SchedulePostCreateModalFormVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostCreateModalFormVideoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostCreateModalFormVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
