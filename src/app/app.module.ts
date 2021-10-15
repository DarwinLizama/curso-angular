import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselGatosComponent } from './componentes/carrusel-gatos/carrusel-gatos.component';
import { Gato1Component } from './componentes/gato1/gato1.component';
import { Gato2Component } from './componentes/gato2/gato2.component';
import { ListaRegionesComponent } from './componentes/lista-regiones/lista-regiones.component';
import { ListaProvinciasComponent } from './componentes/lista-provincias/lista-provincias.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselGatosComponent,
    Gato1Component,
    Gato2Component,
    ListaRegionesComponent,
    ListaProvinciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
