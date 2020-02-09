import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSavedPostSocialComponent } from './bucket-saved-post-social.component';

describe('BucketSavedPostSocialComponent', () => {
  let component: BucketSavedPostSocialComponent;
  let fixture: ComponentFixture<BucketSavedPostSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedPostSocialComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedPostSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
