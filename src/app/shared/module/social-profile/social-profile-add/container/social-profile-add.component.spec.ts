import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileAddComponent } from './social-profile-add.component';

describe('SocialProfileAddComponent', () => {
  let component: SocialProfileAddComponent;
  let fixture: ComponentFixture<SocialProfileAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileAddComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
