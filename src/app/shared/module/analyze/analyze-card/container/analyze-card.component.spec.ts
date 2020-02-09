import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeCardComponent } from './analyze-card.component';

describe('AnalyzeCardComponent', () => {
  let component: AnalyzeCardComponent;
  let fixture: ComponentFixture<AnalyzeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzeCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
