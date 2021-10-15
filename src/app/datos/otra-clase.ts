const var3: number = 4;

class MiClase {

  propiedad: number = 42;

  funcion1 = function () {
    var3;
    // this.propiedad;
  }

  funcion2 = () => {
    var3;
    this.propiedad;
  }

}