import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledComponent } from './bucket-scheduled.component';

describe('BucketScheduledComponent', () => {
  let component: BucketScheduledComponent;
  let fixture: ComponentFixture<BucketScheduledComponent>;

  beforeEach(async(() => {
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
