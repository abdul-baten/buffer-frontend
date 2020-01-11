// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostCreateModalFormTextComponent } from './schedule-post-create-modal-form-text.component';

describe('SchedulePostCreateModalFormTextComponent', () => {
  let component: SchedulePostCreateModalFormTextComponent;
  let fixture: ComponentFixture<SchedulePostCreateModalFormTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostCreateModalFormTextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostCreateModalFormTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
