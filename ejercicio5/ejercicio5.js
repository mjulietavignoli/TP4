/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

 */

class Persona {
  constructor(nombre, edad, sexo, peso, altura, año) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = this.generaDni(); // Corregido el nombre de la función
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.año = año;
  }
  
  mostrarGeneracion() {
    const año = this.año;
    if (año < 1930 || año > 2010) {
      console.log("La edad no es válida");
    } else if (año >= 1930 && año <= 1948) {
      console.log("Su rasgo característico es AUSTERIDAD");
    } else if (año >= 1949 && año <= 1968) {
      console.log("Su rasgo característico es AMBICION");
    } else if (año >= 1969 && año <= 1980) {
      console.log("Su rasgo característico es OBSESION POR EL EXITO");
    } else if (año >= 1981 && año <= 1993) {
      console.log("Su rasgo característico es FRUSTRACION");
    } else if (año >= 1994 && año <= 2010) {
      console.log("Su rasgo característico es IRREVERANCIA");
    }
  }
  
  esMayorDeEdad() {
    let edad = 2010 - this.año;
    if (edad >= 18) {
      console.log("Es mayor de edad");
    } else {
      console.log("No es mayor de edad");
    }
  }

  generaDni() {
    let dni = Math.floor(Math.random() * 99999999) + 1000000;
    this.DNI = dni; // Corregido el nombre de la propiedad
    return dni;
  }

  mostrarDatos() {
    console.log(
      `Nombre: ${this.nombre} \nEdad: ${this.edad} \nDNI: ${this.DNI} \nSexo: ${this.sexo} \nPeso: ${this.peso} kg \nAltura: ${this.altura} cm\nAño de nacimiento: ${this.año}`
    );
  }
}

const persona1 = new Persona("Juli", 20, "M", 65.5, 165, 1990);

persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();

const persona2 = new Persona("Pepe", 5, "H", 30.5, 110, 2005);

persona2.mostrarGeneracion();
persona2.esMayorDeEdad();
persona2.mostrarDatos();
