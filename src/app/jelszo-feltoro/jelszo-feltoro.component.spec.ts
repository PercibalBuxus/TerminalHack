import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JelszoFeltoroComponent } from './jelszo-feltoro.component';

describe('JelszoFeltoroComponent', () => {
  let component: JelszoFeltoroComponent;
  let fixture: ComponentFixture<JelszoFeltoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JelszoFeltoroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JelszoFeltoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
