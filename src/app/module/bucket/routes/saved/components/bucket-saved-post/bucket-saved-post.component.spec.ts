import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSavedPostComponent } from './bucket-saved-post.component';

describe('BucketSavedPostComponent', () => {
  let component: BucketSavedPostComponent;
  let fixture: ComponentFixture<BucketSavedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedPostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
