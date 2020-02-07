import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedPostVideoComponent } from './bucket-published-post-video.component';

describe('BucketPublishedPostVideoComponent', () => {
  let component: BucketPublishedPostVideoComponent;
  let fixture: ComponentFixture<BucketPublishedPostVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedPostVideoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedPostVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
