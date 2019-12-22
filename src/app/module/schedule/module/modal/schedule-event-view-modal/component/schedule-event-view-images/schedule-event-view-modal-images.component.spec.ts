// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleEventViewModalImagesComponent } from './schedule-event-view-modal-images.component';

describe('ScheduleEventViewModalImagesComponent', () => {
  let component: ScheduleEventViewModalImagesComponent;
  let fixture: ComponentFixture<ScheduleEventViewModalImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEventViewModalImagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventViewModalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
