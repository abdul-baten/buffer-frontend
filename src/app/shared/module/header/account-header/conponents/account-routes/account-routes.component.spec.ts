import { AccountRoutesComponent } from './account-routes.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AccountRoutesComponent', () => {
  let component: AccountRoutesComponent;
  let fixture: ComponentFixture<AccountRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountRoutesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
