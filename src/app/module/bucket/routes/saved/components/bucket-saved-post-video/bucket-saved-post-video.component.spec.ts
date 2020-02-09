import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSavedPostVideoComponent } from './bucket-saved-post-video.component';

describe('BucketSavedPostVideoComponent', () => {
  let component: BucketSavedPostVideoComponent;
  let fixture: ComponentFixture<BucketSavedPostVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedPostVideoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedPostVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
