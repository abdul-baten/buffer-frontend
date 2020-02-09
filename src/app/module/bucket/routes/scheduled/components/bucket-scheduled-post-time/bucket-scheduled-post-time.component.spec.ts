import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledPostTimeComponent } from './bucket-scheduled-post-time.component';

describe('BucketScheduledPostTimeComponent', () => {
  let component: BucketScheduledPostTimeComponent;
  let fixture: ComponentFixture<BucketScheduledPostTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledPostTimeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledPostTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
