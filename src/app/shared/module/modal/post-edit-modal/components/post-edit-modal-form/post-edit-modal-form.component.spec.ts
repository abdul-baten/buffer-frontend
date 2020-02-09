// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostEditModalFormComponent } from './post-edit-modal-form.component';

describe('PostEditModalFormComponent', () => {
  let component: PostEditModalFormComponent;
  let fixture: ComponentFixture<PostEditModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostEditModalFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
