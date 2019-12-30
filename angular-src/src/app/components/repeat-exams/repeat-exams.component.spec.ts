import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatExamsComponent } from './repeat-exams.component';

describe('RepeatExamsComponent', () => {
  let component: RepeatExamsComponent;
  let fixture: ComponentFixture<RepeatExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
