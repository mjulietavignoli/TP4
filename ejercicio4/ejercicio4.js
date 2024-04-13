/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
  constructor(codigo,nombre,precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  mostrar() {
    alert(
      `Código: ${this.codigo} \nNombre: ${this.nombre} \nPrecio: ${this.precio}`
    );
  }
}

let prod1 = new Producto(1,"Anillo",1000);
let prod2 = new Producto(2, "Collar", 3000);
let prod3 = new Producto(3, "Pulsera", 1500);

let productos = [prod1,prod2,prod3];

for (let i = 0; i < productos.length; i++) {
  productos[i].mostrar();
}