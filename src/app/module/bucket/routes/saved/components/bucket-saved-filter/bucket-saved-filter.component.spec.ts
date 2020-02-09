import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSavedFilterComponent } from './bucket-saved-filter.component';

describe('BucketSavedFilterComponent', () => {
  let component: BucketSavedFilterComponent;
  let fixture: ComponentFixture<BucketSavedFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
