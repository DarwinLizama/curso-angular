import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Provincia } from './interfaces/provincia.interface';
import { environment } from '../../../environments/environment.prod';




@Component({
  selector: 'app-lista-provincias',
  templateUrl: './lista-provincias.component.html',
  styleUrls: ['./lista-provincias.component.css']
})
export class ListaProvinciasComponent implements OnInit {

cargandoProvincias: boolean = false

 provincias: Provincia[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  cargarProvincias() {
    this.cargandoProvincias = true;
    console.log('se cargan las provincias');
    setTimeout(() => {
      const respuestaApi: Provincia[] = [
        {
          "codigo": "082",
          "tipo": "provincia",
          "nombre": "Arauco",
          "lat": -37.7277,
          "lng": -73.3075,
          "url": "",
          "codigo_padre": "08"
          },
          {
          "codigo": "083",
          "tipo": "provincia",
          "nombre": "Biob\u00edo",
          "lat": -37.4739,
          "lng": -72.1572,
          "url": "",
          "codigo_padre": "08"
          },
          {
          "codigo": "081",
          "tipo": "provincia",
          "nombre": "Concepci\u00f3n",
          "lat": -36.8148,
          "lng": -73.0293,
          "url": "",
          "codigo_padre": "08"
          }
      ];
      console.log(respuestaApi);
      this.provincias = respuestaApi;
      console.log(this.provincias[0].nombre);
      this.cargandoProvincias = false;
    }, 2000);
  }
  // cargarProvincias(){
    
  //   const apiGobierno = environment.apiGobierno;
  //   this.cargandoProvincias = true;
  //   this.http.get<Provincia[]>(apiGobierno).subscribe((respuesta) => {
  //     this.provincias = respuesta;
  //     this.cargandoProvincias = false;
  //   });
  // }

  mostrarCargandoProvincias(): boolean {
    return this.cargandoProvincias;
  }

}
