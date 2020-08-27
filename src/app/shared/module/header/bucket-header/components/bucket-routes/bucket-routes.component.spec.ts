import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BucketRoutesComponent } from './bucket-routes.component';

describe('BucketRoutesComponent', () => {
  let component: BucketRoutesComponent;
  let fixture: ComponentFixture<BucketRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketRoutesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
