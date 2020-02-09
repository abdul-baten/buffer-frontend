import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledPostSocialComponent } from './bucket-scheduled-post-social.component';

describe('BucketScheduledPostSocialComponent', () => {
  let component: BucketScheduledPostSocialComponent;
  let fixture: ComponentFixture<BucketScheduledPostSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledPostSocialComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledPostSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
