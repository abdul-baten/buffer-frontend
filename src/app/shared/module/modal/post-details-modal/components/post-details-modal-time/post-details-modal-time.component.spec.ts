// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostDetailsModalTimeComponent } from './post-details-modal-time.component';

describe('PostDetailsModalTimeComponent', () => {
  let component: PostDetailsModalTimeComponent;
  let fixture: ComponentFixture<PostDetailsModalTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailsModalTimeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsModalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
