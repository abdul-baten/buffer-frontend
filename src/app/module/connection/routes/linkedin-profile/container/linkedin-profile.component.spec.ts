import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInProfileComponent } from './linkedin-profile.component';

describe('LinkedInProfileComponent', () => {
  let component: LinkedInProfileComponent;
  let fixture: ComponentFixture<LinkedInProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedInProfileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
