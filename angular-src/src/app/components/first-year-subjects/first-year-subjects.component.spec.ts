import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstYearSubjectsComponent } from './first-year-subjects.component';

describe('FirstYearSubjectsComponent', () => {
  let component: FirstYearSubjectsComponent;
  let fixture: ComponentFixture<FirstYearSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstYearSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstYearSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
