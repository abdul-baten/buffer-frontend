// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostCreateModalFormMediaSelectionComponent } from './schedule-post-create-modal-form-media-selection.component';

describe('SchedulePostCreateModalFormMediaSelectionComponent', () => {
  let component: SchedulePostCreateModalFormMediaSelectionComponent;
  let fixture: ComponentFixture<SchedulePostCreateModalFormMediaSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostCreateModalFormMediaSelectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostCreateModalFormMediaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
