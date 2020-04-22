import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FacebookGroupComponent } from './facebook-group.component';

describe('FacebookGroupComponent', () => {
  let component: FacebookGroupComponent;
  let fixture: ComponentFixture<FacebookGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
