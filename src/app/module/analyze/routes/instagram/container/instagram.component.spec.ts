import { AnalyzeInstagramComponent } from './instagram.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AnalyzeInstagramComponent', () => {
  let component: AnalyzeInstagramComponent;
  let fixture: ComponentFixture<AnalyzeInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzeInstagramComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
