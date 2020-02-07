import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketSavedPostMenuComponent } from './bucket-saved-post-menu.component';

describe('BucketSavedPostMenuComponent', () => {
  let component: BucketSavedPostMenuComponent;
  let fixture: ComponentFixture<BucketSavedPostMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedPostMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedPostMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
