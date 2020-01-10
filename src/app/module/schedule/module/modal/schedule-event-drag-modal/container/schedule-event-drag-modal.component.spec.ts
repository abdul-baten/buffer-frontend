// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleEventDragModalComponent } from './schedule-event-drag-modal.component';

describe('ScheduleEventDragModalComponent', () => {
  let component: ScheduleEventDragModalComponent;
  let fixture: ComponentFixture<ScheduleEventDragModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventDragModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventDragModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
