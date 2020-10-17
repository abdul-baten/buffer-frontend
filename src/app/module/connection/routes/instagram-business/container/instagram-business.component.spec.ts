import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InstagramBusinessComponent } from './instagram-business.component';

describe('InstagramBusinessComponent', () => {
  let component: InstagramBusinessComponent;
  let fixture: ComponentFixture<InstagramBusinessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramBusinessComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
