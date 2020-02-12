import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookRouteOverviewComponent } from './facebook-route-overview.component';

describe('FacebookRouteOverviewComponent', () => {
  let component: FacebookRouteOverviewComponent;
  let fixture: ComponentFixture<FacebookRouteOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookRouteOverviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookRouteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
