// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { SchedulePostViewModalVideosComponent } from './schedule-post-view-modal-videos.component';

describe('SchedulePostViewModalVideosComponent', () => {
  let component: SchedulePostViewModalVideosComponent;
  let fixture: ComponentFixture<SchedulePostViewModalVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostViewModalVideosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostViewModalVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
