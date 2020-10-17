import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PlanPricingComponent } from './plan-pricing.component';

describe('PlanPricingComponent', () => {
  let component: PlanPricingComponent;
  let fixture: ComponentFixture<PlanPricingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlanPricingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
