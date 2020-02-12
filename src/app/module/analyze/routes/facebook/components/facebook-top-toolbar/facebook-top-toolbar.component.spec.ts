import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookTopToolbarComponent } from './facebook-top-toolbar.component';

describe('FacebookTopToolbarComponent', () => {
  let component: FacebookTopToolbarComponent;
  let fixture: ComponentFixture<FacebookTopToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookTopToolbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
