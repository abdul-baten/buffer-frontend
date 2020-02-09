import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedPostTextComponent } from './bucket-published-post-text.component';

describe('BucketPublishedPostTextComponent', () => {
  let component: BucketPublishedPostTextComponent;
  let fixture: ComponentFixture<BucketPublishedPostTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedPostTextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedPostTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
