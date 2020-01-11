// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { SchedulePostViewModalImagesComponent } from './schedule-post-view-modal-images.component';

describe('SchedulePostViewModalImagesComponent', () => {
  let component: SchedulePostViewModalImagesComponent;
  let fixture: ComponentFixture<SchedulePostViewModalImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostViewModalImagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePostViewModalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
