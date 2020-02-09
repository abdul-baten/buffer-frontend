import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledPostImageComponent } from './bucket-scheduled-post-image.component';

describe('BucketScheduledPostImageComponent', () => {
  let component: BucketScheduledPostImageComponent;
  let fixture: ComponentFixture<BucketScheduledPostImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledPostImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledPostImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
