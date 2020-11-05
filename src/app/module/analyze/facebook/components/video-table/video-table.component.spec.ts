import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoTableComponent } from './video-table.component';

describe('VideoTable Component', () => {
  let component: VideoTableComponent;
  let fixture: ComponentFixture<VideoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
