import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketTopRoutesComponent } from './bucket-top-routes.component';

describe('BucketTopRoutesComponent', () => {
  let component: BucketTopRoutesComponent;
  let fixture: ComponentFixture<BucketTopRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketTopRoutesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketTopRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
