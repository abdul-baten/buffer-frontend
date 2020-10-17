import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntroJumboComponent } from './intro-jumbo.component';

describe('IntroJumboComponent', () => {
  let component: IntroJumboComponent;
  let fixture: ComponentFixture<IntroJumboComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IntroJumboComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
