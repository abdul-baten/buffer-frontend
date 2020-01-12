// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostViewModalHeaderComponent } from './schedule-post-view-modal-header.component';

describe('SchedulePostViewModalHeaderComponent', () => {
  let component: SchedulePostViewModalHeaderComponent;
  let fixture: ComponentFixture<SchedulePostViewModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostViewModalHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostViewModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
