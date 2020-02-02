import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialProfileAddModalComponent } from './social-profile-add-modal.component';

describe('SocialProfileAddModalComponent', () => {
  let component: SocialProfileAddModalComponent;
  let fixture: ComponentFixture<SocialProfileAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialProfileAddModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
