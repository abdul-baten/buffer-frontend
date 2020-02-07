import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledPostComponent } from './bucket-scheduled-post.component';

describe('BucketScheduledPostComponent', () => {
  let component: BucketScheduledPostComponent;
  let fixture: ComponentFixture<BucketScheduledPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledPostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
