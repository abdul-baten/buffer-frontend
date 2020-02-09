// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { PostDetailsModalVideoComponent } from './post-details-modal-video.component';

describe('PostDetailsModalVideoComponent', () => {
  let component: PostDetailsModalVideoComponent;
  let fixture: ComponentFixture<PostDetailsModalVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailsModalVideoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsModalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
