// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PostEditModalFormHeaderComponent } from './post-edit-modal-form-header.component';

describe('PostEditModalFormHeaderComponent', () => {
  let component: PostEditModalFormHeaderComponent;
  let fixture: ComponentFixture<PostEditModalFormHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostEditModalFormHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditModalFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
