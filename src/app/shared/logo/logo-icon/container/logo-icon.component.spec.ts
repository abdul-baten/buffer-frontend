import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogoIconComponent } from './logo-icon.component';

describe('LogoIconComponent', () => {
  let component: LogoIconComponent;
  let fixture: ComponentFixture<LogoIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LogoIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
