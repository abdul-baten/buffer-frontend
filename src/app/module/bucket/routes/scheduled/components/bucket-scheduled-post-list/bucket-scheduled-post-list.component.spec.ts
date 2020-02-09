import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledPostListComponent } from './bucket-scheduled-post-list.component';

describe('BucketScheduledPostListComponent', () => {
  let component: BucketScheduledPostListComponent;
  let fixture: ComponentFixture<BucketScheduledPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledPostListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
