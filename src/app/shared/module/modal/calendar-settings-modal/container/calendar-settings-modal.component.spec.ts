// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { CalendarSettingsModalComponent } from './calendar-settings-modal.component';

describe('CalendarSettingsModalComponent', () => {
  let component: CalendarSettingsModalComponent;
  let fixture: ComponentFixture<CalendarSettingsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarSettingsModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
