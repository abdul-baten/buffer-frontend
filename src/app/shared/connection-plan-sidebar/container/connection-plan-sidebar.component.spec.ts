import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectionPlanSidebarComponent } from './connection-plan-sidebar.component';

describe('ConnectionPlanSidebarComponent', () => {
  let component: ConnectionPlanSidebarComponent;
  let fixture: ComponentFixture<ConnectionPlanSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionPlanSidebarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionPlanSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
