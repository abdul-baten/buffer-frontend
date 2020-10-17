import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BucketPublishedComponent } from './bucket-published.component';

describe('BucketPublishedComponent', () => {
  let component: BucketPublishedComponent;
  let fixture: ComponentFixture<BucketPublishedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
