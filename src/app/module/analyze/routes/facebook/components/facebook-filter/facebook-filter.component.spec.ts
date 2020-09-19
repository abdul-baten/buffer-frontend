import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FacebookFilterComponent } from './facebook-filter.component';

describe('FacebookFilterComponent', () => {
  let component: FacebookFilterComponent;
  let fixture: ComponentFixture<FacebookFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
