import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeChartComponent } from './analyze-chart.component';

describe('AnalyzeChartComponent', () => {
  let component: AnalyzeChartComponent;
  let fixture: ComponentFixture<AnalyzeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzeChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
