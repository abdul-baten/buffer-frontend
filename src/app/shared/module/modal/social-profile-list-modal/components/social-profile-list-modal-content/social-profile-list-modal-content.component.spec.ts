import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileListModalContentComponent } from './social-profile-list-modal-content.component';

describe('SocialProfileListModalContentComponent', () => {
  let component: SocialProfileListModalContentComponent;
  let fixture: ComponentFixture<SocialProfileListModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileListModalContentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileListModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
