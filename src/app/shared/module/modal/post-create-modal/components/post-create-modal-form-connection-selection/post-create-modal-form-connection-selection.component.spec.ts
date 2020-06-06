import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostCreateModalFormConnectionSelectionComponent } from './post-create-modal-form-connection-selection.component';

describe('PostCreateModalFormConnectionSelectionComponent', () => {
  let component: PostCreateModalFormConnectionSelectionComponent;
  let fixture: ComponentFixture<PostCreateModalFormConnectionSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreateModalFormConnectionSelectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateModalFormConnectionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
