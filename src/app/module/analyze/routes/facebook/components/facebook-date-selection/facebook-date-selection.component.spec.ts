import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookDateSelectionComponent } from './facebook-date-selection.component';

describe('FacebookDateSelectionComponent', () => {
  let component: FacebookDateSelectionComponent;
  let fixture: ComponentFixture<FacebookDateSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookDateSelectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookDateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
