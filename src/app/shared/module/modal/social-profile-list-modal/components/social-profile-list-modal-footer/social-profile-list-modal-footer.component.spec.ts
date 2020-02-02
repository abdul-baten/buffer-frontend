import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileListModalFooterComponent } from './social-profile-list-modal-footer.component';

describe('SocialProfileListModalFooterComponent', () => {
  let component: SocialProfileListModalFooterComponent;
  let fixture: ComponentFixture<SocialProfileListModalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileListModalFooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileListModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
