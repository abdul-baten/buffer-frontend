import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroJumboComponent } from './intro-jumbo.component';

describe('IntroJumboComponent', () => {
  let component: IntroJumboComponent;
  let fixture: ComponentFixture<IntroJumboComponent>;

  beforeEach(async(() => {
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
