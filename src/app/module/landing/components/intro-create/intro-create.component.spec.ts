import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntroCreateComponent } from './intro-create.component';

describe('IntroCreateComponent', () => {
  let component: IntroCreateComponent;
  let fixture: ComponentFixture<IntroCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IntroCreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
