// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostCreateModalComponent } from './schedule-post-create-modal.component';

describe('SchedulePostCreateModalComponent', () => {
  let component: SchedulePostCreateModalComponent;
  let fixture: ComponentFixture<SchedulePostCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostCreateModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
