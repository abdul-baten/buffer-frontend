import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialProfileToolbarComponent } from './social-profile-toolbar.component';

describe('SocialProfileToolbarComponent', () => {
  let component: SocialProfileToolbarComponent;
  let fixture: ComponentFixture<SocialProfileToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileToolbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
