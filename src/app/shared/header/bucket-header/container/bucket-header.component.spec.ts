import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BucketHeaderComponent } from './bucket-header.component';

describe('BucketHeaderComponent', () => {
  let component: BucketHeaderComponent;
  let fixture: ComponentFixture<BucketHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BucketHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
