import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileAddModalContentResourceComponent } from './social-profile-add-modal-content-resource.component';

describe('SocialProfileAddModalContentResourceComponent', () => {
  let component: SocialProfileAddModalContentResourceComponent;
  let fixture: ComponentFixture<SocialProfileAddModalContentResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileAddModalContentResourceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileAddModalContentResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
