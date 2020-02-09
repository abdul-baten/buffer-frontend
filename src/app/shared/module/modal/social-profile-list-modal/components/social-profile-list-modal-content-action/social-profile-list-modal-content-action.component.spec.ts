import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileListModalContentActionComponent } from './social-profile-list-modal-content-action.component';

describe('SocialProfileListModalContentActionComponent', () => {
  let component: SocialProfileListModalContentActionComponent;
  let fixture: ComponentFixture<SocialProfileListModalContentActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileListModalContentActionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileListModalContentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
