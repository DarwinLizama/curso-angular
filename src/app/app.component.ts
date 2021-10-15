import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { Caminar, miFuncion, miFuncionAnominaODeFlecha } from './datos/definiciones';

type MiNumero = number;
type NumeroOString = number | string;
type StrODate = string | Date; // "2021-10-02T13:34:00Z" o new Date()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titulo: string = 'mi titulo';
  numeroOString: NumeroOString = 'hola';
  numero: MiNumero = 42;
  fecha: Date = new Date();
  dict: Record<string, number> = { 'a': 1 };
  flag!: boolean; // !: indica que se va a definir en el constructor o al iniciar el componente
  cualquiera: any; // javascript 

  humano: Caminar = {
    cantidadPies: 2,
    // correr: () => {
    //   console.log('corriendo')
    // }
    correr: function () {
      console.log('corriendo');
    },
    correrDevolviendoAlgo: () => {
      return this.numero;
    },
    // correrConParametros: (velocidad: number) => {
    //   return this.numero * velocidad;
    // }
    correrConParametros: function (this: Caminar, velocidad: number) {
      return velocidad * this.cantidadPies;
    }
  }

  constructor() {
    this.flag = true;
    this.saludar();
    const suma = this.sumar(this.numero, 4);
    console.log('suma', suma);
    console.log(environment.rutaApi);
    console.log(this.dict);

    this.humano.correr();
    console.log('correrDevolviendoAlgo', this.humano.correrDevolviendoAlgo());
    console.log('correrConParametros', this.humano.correrConParametros(60));
  }

  saludar() {
    console.log(this.titulo);  
  }

  private sumar(a: number, b: number): number {
    return miFuncionAnominaODeFlecha(a + b);
  }

}
