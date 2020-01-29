// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostCreateModalFormVideoComponent } from './post-create-modal-form-video.component';

describe('PostCreateModalFormVideoComponent', () => {
  let component: PostCreateModalFormVideoComponent;
  let fixture: ComponentFixture<PostCreateModalFormVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreateModalFormVideoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateModalFormVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
