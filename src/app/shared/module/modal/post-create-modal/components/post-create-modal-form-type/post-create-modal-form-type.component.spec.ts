// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostCreateModalFormTypeComponent } from './post-create-modal-form-type.component';

describe('PostCreateModalFormTypeComponent', () => {
  let component: PostCreateModalFormTypeComponent;
  let fixture: ComponentFixture<PostCreateModalFormTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreateModalFormTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateModalFormTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
