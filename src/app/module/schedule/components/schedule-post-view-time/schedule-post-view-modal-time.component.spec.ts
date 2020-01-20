// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostViewModalTimeComponent } from './schedule-post-view-modal-time.component';

describe('SchedulePostViewModalTimeComponent', () => {
  let component: SchedulePostViewModalTimeComponent;
  let fixture: ComponentFixture<SchedulePostViewModalTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostViewModalTimeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostViewModalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
