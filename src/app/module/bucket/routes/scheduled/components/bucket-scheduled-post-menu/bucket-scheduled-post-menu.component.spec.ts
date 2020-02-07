import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketScheduledPostMenuComponent } from './bucket-scheduled-post-menu.component';

describe('BucketScheduledPostMenuComponent', () => {
  let component: BucketScheduledPostMenuComponent;
  let fixture: ComponentFixture<BucketScheduledPostMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketScheduledPostMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketScheduledPostMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
