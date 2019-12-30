import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdYearSubjectsComponent } from './third-year-subjects.component';

describe('ThirdYearSubjectsComponent', () => {
  let component: ThirdYearSubjectsComponent;
  let fixture: ComponentFixture<ThirdYearSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdYearSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdYearSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
