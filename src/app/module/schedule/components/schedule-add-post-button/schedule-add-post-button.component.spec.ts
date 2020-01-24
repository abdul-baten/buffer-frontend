// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleAddPostButtonComponent } from './schedule-add-post-button.component';

describe('ScheduleAddPostButtonComponent', () => {
  let component: ScheduleAddPostButtonComponent;
  let fixture: ComponentFixture<ScheduleAddPostButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleAddPostButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAddPostButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
