import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninJumboComponent } from './signin-jumbo.component';

describe('SigninJumboComponent', () => {
  let component: SigninJumboComponent;
  let fixture: ComponentFixture<SigninJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SigninJumboComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
