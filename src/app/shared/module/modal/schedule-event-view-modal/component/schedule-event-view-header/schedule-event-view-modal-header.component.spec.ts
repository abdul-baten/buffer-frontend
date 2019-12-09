// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleEventViewModalHeaderComponent } from './schedule-event-view-modal-header.component';

describe('ScheduleEventViewModalHeaderComponent', () => {
  let component: ScheduleEventViewModalHeaderComponent;
  let fixture: ComponentFixture<ScheduleEventViewModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventViewModalHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventViewModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
