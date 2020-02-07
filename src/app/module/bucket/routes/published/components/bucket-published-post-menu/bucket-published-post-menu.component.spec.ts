import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPublishedPostMenuComponent } from './bucket-published-post-menu.component';

describe('BucketPublishedPostMenuComponent', () => {
  let component: BucketPublishedPostMenuComponent;
  let fixture: ComponentFixture<BucketPublishedPostMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPublishedPostMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPublishedPostMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
