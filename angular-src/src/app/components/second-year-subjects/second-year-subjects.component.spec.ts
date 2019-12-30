import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearSubjectsComponent } from './second-year-subjects.component';

describe('SecondYearSubjectsComponent', () => {
  let component: SecondYearSubjectsComponent;
  let fixture: ComponentFixture<SecondYearSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondYearSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondYearSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
