import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gato2Component } from './gato2.component';

describe('Gato2Component', () => {
  let component: Gato2Component;
  let fixture: ComponentFixture<Gato2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gato2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gato2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
