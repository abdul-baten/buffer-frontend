import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedPostTimeComponent } from './bucket-published-post-time.component';

describe('BucketPublishedPostTimeComponent', () => {
  let component: BucketPublishedPostTimeComponent;
  let fixture: ComponentFixture<BucketPublishedPostTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedPostTimeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedPostTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
