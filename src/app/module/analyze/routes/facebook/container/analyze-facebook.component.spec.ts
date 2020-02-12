import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeFacebookComponent } from './analyze-facebook.component';

describe('AnalyzeFacebookComponent', () => {
  let component: AnalyzeFacebookComponent;
  let fixture: ComponentFixture<AnalyzeFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzeFacebookComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
