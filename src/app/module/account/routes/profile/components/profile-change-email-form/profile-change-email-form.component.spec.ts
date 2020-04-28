import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileChangeEmailFormComponent } from './profile-change-email-form.component';

describe('ProfileChangeEmailFormComponent', () => {
  let component: ProfileChangeEmailFormComponent;
  let fixture: ComponentFixture<ProfileChangeEmailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileChangeEmailFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChangeEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
