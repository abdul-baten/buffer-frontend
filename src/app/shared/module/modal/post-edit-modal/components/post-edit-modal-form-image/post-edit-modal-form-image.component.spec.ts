// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostEditModalFormImageComponent } from './post-edit-modal-form-image.component';

describe('PostEditModalFormImageComponent', () => {
  let component: PostEditModalFormImageComponent;
  let fixture: ComponentFixture<PostEditModalFormImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostEditModalFormImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditModalFormImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
