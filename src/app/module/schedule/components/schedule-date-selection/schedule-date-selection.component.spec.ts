// Core Module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { ScheduleDateSelectionComponent } from './schedule-date-selection.component';

describe('ScheduleDateSelectionComponent', () => {
  let component: ScheduleDateSelectionComponent;
  let fixture: ComponentFixture<ScheduleDateSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleDateSelectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
