import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileAddModalContentPlanComponent } from './social-profile-add-modal-content-plan.component';

describe('SocialProfileAddModalContentPlanComponent', () => {
  let component: SocialProfileAddModalContentPlanComponent;
  let fixture: ComponentFixture<SocialProfileAddModalContentPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileAddModalContentPlanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileAddModalContentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
