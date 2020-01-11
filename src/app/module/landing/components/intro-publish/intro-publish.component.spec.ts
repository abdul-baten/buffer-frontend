import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPublishComponent } from './intro-publish.component';

describe('IntroPublishComponent', () => {
  let component: IntroPublishComponent;
  let fixture: ComponentFixture<IntroPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroPublishComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
