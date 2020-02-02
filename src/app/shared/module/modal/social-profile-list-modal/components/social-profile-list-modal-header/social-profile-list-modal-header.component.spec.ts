import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileListModalHeaderComponent } from './social-profile-list-modal-header.component';

describe('SocialProfileListModalHeaderComponent', () => {
  let component: SocialProfileListModalHeaderComponent;
  let fixture: ComponentFixture<SocialProfileListModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileListModalHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileListModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
