import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileAddModalFooterComponent } from './social-profile-add-modal-footer.component';

describe('SocialProfileAddModalFooterComponent', () => {
  let component: SocialProfileAddModalFooterComponent;
  let fixture: ComponentFixture<SocialProfileAddModalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileAddModalFooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileAddModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
