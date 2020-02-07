import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSavedPostTimeComponent } from './bucket-saved-post-time.component';

describe('BucketSavedPostTimeComponent', () => {
  let component: BucketSavedPostTimeComponent;
  let fixture: ComponentFixture<BucketSavedPostTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedPostTimeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedPostTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
