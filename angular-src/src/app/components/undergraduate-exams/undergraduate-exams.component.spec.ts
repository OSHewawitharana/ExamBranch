import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergraduateExamsComponent } from './undergraduate-exams.component';

describe('UndergraduateExamsComponent', () => {
  let component: UndergraduateExamsComponent;
  let fixture: ComponentFixture<UndergraduateExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergraduateExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergraduateExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
