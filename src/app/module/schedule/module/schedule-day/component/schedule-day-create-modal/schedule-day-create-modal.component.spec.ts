import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDayCreateModalComponent } from './schedule-day-create-modal.component';

describe('ScheduleDayCreateModalComponent', () => {
  let component: ScheduleDayCreateModalComponent;
  let fixture: ComponentFixture<ScheduleDayCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleDayCreateModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDayCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
