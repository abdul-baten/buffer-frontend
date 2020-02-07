import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSavedPostTextComponent } from './bucket-saved-post-text.component';

describe('BucketSavedPostTextComponent', () => {
  let component: BucketSavedPostTextComponent;
  let fixture: ComponentFixture<BucketSavedPostTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedPostTextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedPostTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
