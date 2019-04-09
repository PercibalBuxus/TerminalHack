import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCrackerComponent } from './password-cracker.component';

describe('PasswordCrackerComponent', () => {
  let component: PasswordCrackerComponent;
  let fixture: ComponentFixture<PasswordCrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordCrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
