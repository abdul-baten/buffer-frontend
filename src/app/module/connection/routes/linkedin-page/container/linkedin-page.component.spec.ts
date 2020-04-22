import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInPageComponent } from './linkedin-page.component';

describe('LinkedInPageComponent', () => {
  let component: LinkedInPageComponent;
  let fixture: ComponentFixture<LinkedInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedInPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
