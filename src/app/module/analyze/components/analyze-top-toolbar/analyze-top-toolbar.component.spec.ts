import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeTopToolbarComponent } from './analyze-top-toolbar.component';

describe('AnalyzeTopToolbarComponent', () => {
  let component: AnalyzeTopToolbarComponent;
  let fixture: ComponentFixture<AnalyzeTopToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzeTopToolbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
