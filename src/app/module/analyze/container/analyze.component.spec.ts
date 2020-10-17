import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnalyzeComponent } from './analyze.component';

describe('AnalyzeComponent', () => {
  let component: AnalyzeComponent;
  let fixture: ComponentFixture<AnalyzeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
