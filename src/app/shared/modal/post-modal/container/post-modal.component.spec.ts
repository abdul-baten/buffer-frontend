import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PostModalComponent } from './post-modal.component';

describe('PostModalComponent', () => {
  let component: PostModalComponent;
  let fixture: ComponentFixture<PostModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
