import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredSubjectsComponent } from './registered-subjects.component';

describe('RegisteredSubjectsComponent', () => {
  let component: RegisteredSubjectsComponent;
  let fixture: ComponentFixture<RegisteredSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
