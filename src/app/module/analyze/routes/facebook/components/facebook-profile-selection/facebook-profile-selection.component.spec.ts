import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookProfileSelectionComponent } from './facebook-profile-selection.component';

describe('FacebookProfileSelectionComponent', () => {
  let component: FacebookProfileSelectionComponent;
  let fixture: ComponentFixture<FacebookProfileSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookProfileSelectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookProfileSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
