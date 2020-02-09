import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialProfileListModalComponent } from './social-profile-list-modal.component';

describe('SocialProfileListModalComponent', () => {
  let component: SocialProfileListModalComponent;
  let fixture: ComponentFixture<SocialProfileListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileListModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
