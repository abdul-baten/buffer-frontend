import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedPostSocialComponent } from './bucket-published-post-social.component';

describe('BucketPublishedPostSocialComponent', () => {
  let component: BucketPublishedPostSocialComponent;
  let fixture: ComponentFixture<BucketPublishedPostSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedPostSocialComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedPostSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
