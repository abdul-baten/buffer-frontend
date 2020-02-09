import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSavedPostImageComponent } from './bucket-saved-post-image.component';

describe('BucketSavedPostImageComponent', () => {
  let component: BucketSavedPostImageComponent;
  let fixture: ComponentFixture<BucketSavedPostImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedPostImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedPostImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
