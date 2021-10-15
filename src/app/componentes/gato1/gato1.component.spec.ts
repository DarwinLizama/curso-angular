import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gato1Component } from './gato1.component';

describe('Gato1Component', () => {
  let component: Gato1Component;
  let fixture: ComponentFixture<Gato1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gato1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gato1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
