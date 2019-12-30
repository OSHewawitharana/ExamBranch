import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateExamsComponent } from './postgraduate-exams.component';

describe('PostgraduateExamsComponent', () => {
  let component: PostgraduateExamsComponent;
  let fixture: ComponentFixture<PostgraduateExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgraduateExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgraduateExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
