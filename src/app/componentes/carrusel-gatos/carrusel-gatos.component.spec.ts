import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselGatosComponent } from './carrusel-gatos.component';

describe('CarruselGatosComponent', () => {
  let component: CarruselGatosComponent;
  let fixture: ComponentFixture<CarruselGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselGatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
