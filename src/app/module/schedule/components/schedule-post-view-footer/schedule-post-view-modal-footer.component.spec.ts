// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { SchedulePostViewModalFooterComponent } from './schedule-post-view-modal-footer.component';

describe('SchedulePostViewModalFooterComponent', () => {
  let component: SchedulePostViewModalFooterComponent;
  let fixture: ComponentFixture<SchedulePostViewModalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostViewModalFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostViewModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
