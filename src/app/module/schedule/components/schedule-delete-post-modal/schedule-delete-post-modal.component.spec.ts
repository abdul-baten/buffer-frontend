// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { ScheduleDeletePostModalComponent } from './schedule-delete-post-modal.component';

describe('ScheduleDeletePostModalComponent', () => {
  let component: ScheduleDeletePostModalComponent;
  let fixture: ComponentFixture<ScheduleDeletePostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleDeletePostModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDeletePostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
