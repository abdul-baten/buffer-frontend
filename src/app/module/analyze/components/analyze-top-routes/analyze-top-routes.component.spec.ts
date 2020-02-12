import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeTopRoutesComponent } from './analyze-top-routes.component';

describe('AnalyzeTopRoutesComponent', () => {
  let component: AnalyzeTopRoutesComponent;
  let fixture: ComponentFixture<AnalyzeTopRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzeTopRoutesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeTopRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
