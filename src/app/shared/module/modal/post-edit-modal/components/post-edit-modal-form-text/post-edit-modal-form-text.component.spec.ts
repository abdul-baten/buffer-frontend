// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostEditModalFormTextComponent } from './post-edit-modal-form-text.component';

describe('PostEditModalFormTextComponent', () => {
  let component: PostEditModalFormTextComponent;
  let fixture: ComponentFixture<PostEditModalFormTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostEditModalFormTextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditModalFormTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
