import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InstagramBusinessComponent } from './instagram-business.component';

describe('InstagramBusinessComponent', () => {
  let component: InstagramBusinessComponent;
  let fixture: ComponentFixture<InstagramBusinessComponent>;

  beforeEach(async(() => {
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
