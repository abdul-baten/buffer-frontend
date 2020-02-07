import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledPostVideoComponent } from './bucket-scheduled-post-video.component';

describe('BucketScheduledPostVideoComponent', () => {
  let component: BucketScheduledPostVideoComponent;
  let fixture: ComponentFixture<BucketScheduledPostVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledPostVideoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledPostVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
