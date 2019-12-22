// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleEventViewModalVideosComponent } from './schedule-event-view-modal-videos.component';

describe('ScheduleEventViewModalVideosComponent', () => {
  let component: ScheduleEventViewModalVideosComponent;
  let fixture: ComponentFixture<ScheduleEventViewModalVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventViewModalVideosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventViewModalVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
