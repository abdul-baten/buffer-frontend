// Core Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { CalendarSettingsModalFormComponent } from './calendar-settings-modal-form.component';

describe('CalendarSettingsModalFormComponent', () => {
  let component: CalendarSettingsModalFormComponent;
  let fixture: ComponentFixture<CalendarSettingsModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarSettingsModalFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSettingsModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
