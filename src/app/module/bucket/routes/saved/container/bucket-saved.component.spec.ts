import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BucketSavedComponent } from './bucket-saved.component';

describe('BucketSavedComponent', () => {
  let component: BucketSavedComponent;
  let fixture: ComponentFixture<BucketSavedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BucketSavedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
