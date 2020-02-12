import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookRoutesComponent } from './facebook-routes.component';

describe('FacebookRoutesComponent', () => {
  let component: FacebookRoutesComponent;
  let fixture: ComponentFixture<FacebookRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookRoutesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
