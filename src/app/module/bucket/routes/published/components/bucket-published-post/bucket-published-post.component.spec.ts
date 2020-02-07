import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedPostComponent } from './bucket-published-post.component';

describe('BucketPublishedPostComponent', () => {
  let component: BucketPublishedPostComponent;
  let fixture: ComponentFixture<BucketPublishedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedPostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
