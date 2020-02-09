// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostEditModalFormMediaSelectionComponent } from './post-edit-modal-form-media-selection.component';

describe('PostEditModalFormMediaSelectionComponent', () => {
  let component: PostEditModalFormMediaSelectionComponent;
  let fixture: ComponentFixture<PostEditModalFormMediaSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostEditModalFormMediaSelectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditModalFormMediaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
