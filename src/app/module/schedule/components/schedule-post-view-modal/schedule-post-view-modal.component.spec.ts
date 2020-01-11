// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { SchedulePostViewModalComponent } from './schedule-post-view-modal.component';

describe('SchedulePostViewModalComponent', () => {
  let component: SchedulePostViewModalComponent;
  let fixture: ComponentFixture<SchedulePostViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostViewModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
