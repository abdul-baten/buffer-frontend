// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostCreateModalFormHeaderComponent } from './post-create-modal-form-header.component';

describe('PostCreateModalFormHeaderComponent', () => {
  let component: PostCreateModalFormHeaderComponent;
  let fixture: ComponentFixture<PostCreateModalFormHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreateModalFormHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateModalFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
