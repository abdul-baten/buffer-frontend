import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileListModalContentResourceComponent } from './social-profile-list-modal-content-resource.component';

describe('SocialProfileListModalContentResourceComponent', () => {
  let component: SocialProfileListModalContentResourceComponent;
  let fixture: ComponentFixture<SocialProfileListModalContentResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileListModalContentResourceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileListModalContentResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
