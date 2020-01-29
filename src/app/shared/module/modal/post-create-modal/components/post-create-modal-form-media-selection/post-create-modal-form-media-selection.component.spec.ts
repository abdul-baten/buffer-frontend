// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostCreateModalFormMediaSelectionComponent } from './post-create-modal-form-media-selection.component';

describe('PostCreateModalFormMediaSelectionComponent', () => {
  let component: PostCreateModalFormMediaSelectionComponent;
  let fixture: ComponentFixture<PostCreateModalFormMediaSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreateModalFormMediaSelectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateModalFormMediaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
