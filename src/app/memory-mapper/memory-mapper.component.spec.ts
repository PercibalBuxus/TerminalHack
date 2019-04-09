import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryMapperComponent } from './memory-mapper.component';

describe('MemoryMapperComponent', () => {
  let component: MemoryMapperComponent;
  let fixture: ComponentFixture<MemoryMapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryMapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
