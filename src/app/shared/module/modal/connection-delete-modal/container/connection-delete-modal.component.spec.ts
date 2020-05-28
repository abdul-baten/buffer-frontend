import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectionDeleteModalComponent } from './connection-delete-modal.component';

describe('ConnectionDeleteModalComponent', () => {
  let component: ConnectionDeleteModalComponent;
  let fixture: ComponentFixture<ConnectionDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionDeleteModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
