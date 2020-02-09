import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledPostTextComponent } from './bucket-scheduled-post-text.component';

describe('BucketScheduledPostTextComponent', () => {
  let component: BucketScheduledPostTextComponent;
  let fixture: ComponentFixture<BucketScheduledPostTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledPostTextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledPostTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
