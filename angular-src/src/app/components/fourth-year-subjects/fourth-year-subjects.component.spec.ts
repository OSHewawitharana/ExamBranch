import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthYearSubjectsComponent } from './fourth-year-subjects.component';

describe('FourthYearSubjectsComponent', () => {
  let component: FourthYearSubjectsComponent;
  let fixture: ComponentFixture<FourthYearSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthYearSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthYearSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
