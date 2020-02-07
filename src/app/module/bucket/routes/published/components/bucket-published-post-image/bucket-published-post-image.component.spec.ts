import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedPostImageComponent } from './bucket-published-post-image.component';

describe('BucketPublishedPostImageComponent', () => {
  let component: BucketPublishedPostImageComponent;
  let fixture: ComponentFixture<BucketPublishedPostImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedPostImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedPostImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
