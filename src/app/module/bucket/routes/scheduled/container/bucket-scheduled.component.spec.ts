import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BucketScheduledComponent } from './bucket-scheduled.component';

describe('BucketScheduledComponent', () => {
  let component: BucketScheduledComponent;
  let fixture: ComponentFixture<BucketScheduledComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
