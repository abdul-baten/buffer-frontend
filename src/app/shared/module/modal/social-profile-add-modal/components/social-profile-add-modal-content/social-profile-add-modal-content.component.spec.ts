import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileAddModalContentComponent } from './social-profile-add-modal-content.component';

describe('SocialProfileAddModalContentComponent', () => {
  let component: SocialProfileAddModalContentComponent;
  let fixture: ComponentFixture<SocialProfileAddModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileAddModalContentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileAddModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
