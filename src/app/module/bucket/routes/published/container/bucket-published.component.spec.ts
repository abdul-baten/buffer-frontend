import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedComponent } from './bucket-published.component';

describe('BucketPublishedComponent', () => {
  let component: BucketPublishedComponent;
  let fixture: ComponentFixture<BucketPublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
