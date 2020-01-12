import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCreateComponent } from './intro-create.component';

describe('IntroCreateComponent', () => {
  let component: IntroCreateComponent;
  let fixture: ComponentFixture<IntroCreateComponent>;

  beforeEach(async(() => {
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
