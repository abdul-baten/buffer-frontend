import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookRouteAudienceComponent } from './facebook-route-audience.component';

describe('FacebookRouteAudienceComponent', () => {
  let component: FacebookRouteAudienceComponent;
  let fixture: ComponentFixture<FacebookRouteAudienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookRouteAudienceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookRouteAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
