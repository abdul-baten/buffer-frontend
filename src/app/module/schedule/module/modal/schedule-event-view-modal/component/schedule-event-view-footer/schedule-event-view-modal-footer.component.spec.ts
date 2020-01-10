// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventViewModalFooterComponent } from './schedule-event-view-modal-footer.component';

describe('ScheduleEventViewModalFooterComponent', () => {
  let component: ScheduleEventViewModalFooterComponent;
  let fixture: ComponentFixture<ScheduleEventViewModalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventViewModalFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventViewModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
