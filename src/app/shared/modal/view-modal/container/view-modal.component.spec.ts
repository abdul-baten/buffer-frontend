import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewModalComponent } from './view-modal.component';

describe('ViewModalComponent', () => {
  let component: ViewModalComponent;
  let fixture: ComponentFixture<ViewModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ViewModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
