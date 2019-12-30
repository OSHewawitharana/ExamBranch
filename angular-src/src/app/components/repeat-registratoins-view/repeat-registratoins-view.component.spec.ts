import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatRegistratoinsViewComponent } from './repeat-registratoins-view.component';

describe('RepeatRegistratoinsViewComponent', () => {
  let component: RepeatRegistratoinsViewComponent;
  let fixture: ComponentFixture<RepeatRegistratoinsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatRegistratoinsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatRegistratoinsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
