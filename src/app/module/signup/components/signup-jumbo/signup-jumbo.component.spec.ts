import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupJumboComponent } from './signup-jumbo.component';

describe('SignupJumboComponent', () => {
  let component: SignupJumboComponent;
  let fixture: ComponentFixture<SignupJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupJumboComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
