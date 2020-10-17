import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChooseConnectionComponent } from './choose-connection.component';

describe('ChooseConnectionComponent', () => {
  let component: ChooseConnectionComponent;
  let fixture: ComponentFixture<ChooseConnectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseConnectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
