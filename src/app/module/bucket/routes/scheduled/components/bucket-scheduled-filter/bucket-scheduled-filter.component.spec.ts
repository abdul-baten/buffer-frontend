import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledFilterComponent } from './bucket-scheduled-filter.component';

describe('BucketScheduledFilterComponent', () => {
  let component: BucketScheduledFilterComponent;
  let fixture: ComponentFixture<BucketScheduledFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
