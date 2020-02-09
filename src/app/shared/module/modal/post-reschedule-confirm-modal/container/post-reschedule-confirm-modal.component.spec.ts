// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { PostRescheduleConfirmModalComponent } from './post-reschedule-confirm-modal.component';

describe('PostRescheduleConfirmModalComponent', () => {
  let component: PostRescheduleConfirmModalComponent;
  let fixture: ComponentFixture<PostRescheduleConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostRescheduleConfirmModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRescheduleConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
