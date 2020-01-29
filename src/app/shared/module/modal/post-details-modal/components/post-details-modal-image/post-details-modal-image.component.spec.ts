// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { PostDetailsModalImageComponent } from './post-details-modal-image.component';

describe('PostDetailsModalImageComponent', () => {
  let component: PostDetailsModalImageComponent;
  let fixture: ComponentFixture<PostDetailsModalImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailsModalImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsModalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
