import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedPostListComponent } from './bucket-published-post-list.component';

describe('BucketPublishedPostListComponent', () => {
  let component: BucketPublishedPostListComponent;
  let fixture: ComponentFixture<BucketPublishedPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedPostListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
