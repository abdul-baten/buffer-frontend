import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketTopToolbarComponent } from './bucket-top-toolbar.component';

describe('BucketTopToolbarComponent', () => {
  let component: BucketTopToolbarComponent;
  let fixture: ComponentFixture<BucketTopToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketTopToolbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
