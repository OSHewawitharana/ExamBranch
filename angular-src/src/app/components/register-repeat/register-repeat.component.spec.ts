import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRepeatComponent } from './register-repeat.component';

describe('RegisterRepeatComponent', () => {
  let component: RegisterRepeatComponent;
  let fixture: ComponentFixture<RegisterRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
