import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanPricingComponent } from './plan-pricing.component';

describe('PlanPricingComponent', () => {
  let component: PlanPricingComponent;
  let fixture: ComponentFixture<PlanPricingComponent>;

  beforeEach(async(() => {
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
