//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  mostrar() {
    alert(`El alto es ${this.alto} y el ancho es ${this.ancho}`);
  }
  calcularPerimetro() {
    return this.alto * 2 + this.ancho * 2;
  }
  calcularArea() {
    return this.alto * this.ancho;
  }
  modificarAlto(alto) {
    this.alto = alto;
  }
  modificarAncho(ancho) {
    this.ancho = ancho;
  }
}
let opcion = parseInt(
  prompt(
    "Eliga la opción \n1. Crear rectangulo \n2. Modificar ancho y alto  \n3. Mostrar ancho y alto \n4. Calcular perimetro \n5. Calcular Area \n6. Salir"
  )
);
let ancho;
let alto;
const rectangulo = new Rectangulo();
while (opcion !== 6) {
  if (opcion === 1 || opcion === 2) {
    alto = Number(prompt("Ingrese el alto del rectangulo"));
    ancho = Number(prompt("Ingrese el ancho del rectangulo"));
    rectangulo = new Rectangulo(alto, ancho);
    rectangulo.mostrar();
  } else if (opcion === 3) {
    rectangulo.mostrar();
  } else if (opcion === 4) {
    let perimetro = rectangulo.calcularPerimetro();
    alert(perimetro);
  } else if (opcion === 5) {
    let area = rectangulo.calcularArea();
    alert(area);
  } else{
    alert('Opción no válida');
  }
  opcion = parseInt(
    prompt(
      "Eliga la opción \n1. Crear rectangulo \n2. Modificar ancho y alto  \n3. Mostrar ancho y alto \n4. Calcular perimetro \n5. Calcular Area \n6. Salir"
    )
  );
}
