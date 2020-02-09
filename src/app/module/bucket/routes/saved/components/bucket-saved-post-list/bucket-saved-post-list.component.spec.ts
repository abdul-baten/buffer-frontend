import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSavedPostListComponent } from './bucket-saved-post-list.component';

describe('BucketSavedPostListComponent', () => {
  let component: BucketSavedPostListComponent;
  let fixture: ComponentFixture<BucketSavedPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedPostListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
