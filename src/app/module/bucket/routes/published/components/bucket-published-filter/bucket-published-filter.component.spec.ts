import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedFilterComponent } from './bucket-published-filter.component';

describe('BucketPublishedFilterComponent', () => {
  let component: BucketPublishedFilterComponent;
  let fixture: ComponentFixture<BucketPublishedFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
