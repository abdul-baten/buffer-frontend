// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { PostRescheduleModalComponent } from './post-reschedule-modal.component';

describe('PostRescheduleModalComponent', () => {
  let component: PostRescheduleModalComponent;
  let fixture: ComponentFixture<PostRescheduleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostRescheduleModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRescheduleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
