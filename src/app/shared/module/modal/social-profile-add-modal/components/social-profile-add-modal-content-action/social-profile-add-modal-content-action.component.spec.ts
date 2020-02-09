import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialProfileAddModalContentActionComponent } from './social-profile-add-modal-content-action.component';

describe('SocialProfileAddModalContentActionComponent', () => {
  let component: SocialProfileAddModalContentActionComponent;
  let fixture: ComponentFixture<SocialProfileAddModalContentActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileAddModalContentActionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileAddModalContentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
