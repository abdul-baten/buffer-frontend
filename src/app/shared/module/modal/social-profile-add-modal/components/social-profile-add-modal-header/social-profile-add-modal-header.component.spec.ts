import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileAddModalHeaderComponent } from './social-profile-add-modal-header.component';

describe('SocialProfileAddModalHeaderComponent', () => {
  let component: SocialProfileAddModalHeaderComponent;
  let fixture: ComponentFixture<SocialProfileAddModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileAddModalHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileAddModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
