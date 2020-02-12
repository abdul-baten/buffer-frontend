import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookRoutePostsComponent } from './facebook-route-posts.component';

describe('FacebookRoutePostsComponent', () => {
  let component: FacebookRoutePostsComponent;
  let fixture: ComponentFixture<FacebookRoutePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookRoutePostsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookRoutePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
