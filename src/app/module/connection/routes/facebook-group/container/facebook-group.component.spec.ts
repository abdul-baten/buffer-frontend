import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FacebookGroupComponent } from './facebook-group.component';

describe('FacebookGroupComponent', () => {
  let component: FacebookGroupComponent;
  let fixture: ComponentFixture<FacebookGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
