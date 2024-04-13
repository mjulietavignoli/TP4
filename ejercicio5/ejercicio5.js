/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
 */

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, año) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.año = año;
  }
  mostrarGeneracion(año) {
    if (año < 1930 || año > 2010) {
      alert("La edad no es válida");
    } else if (año >= 1930 && año <= 1948) {
      alert("Su rasgo característico es AUSTERIDAD");
    } else if (año >= 1949 && año <= 1968) {
      alert("Su rasgo característico es AMBICION");
    } else if (año >= 1969 && año <= 1980) {
      alert("Su rasgo característico es OBSESION POR EL EXITO");
    } else if (año >= 1981 && año <= 1993) {
      alert("Su rasgo característico es FRUSTRACION");
    } else if (año >= 1994 && año <= 2010) {
      alert("Su rasgo característico es FRUSTRACION");
    }
  }
  esMayorDeEdad(año) {
    let edad = 2024 - año;
    if (edad >= 18) {
      alert("Es mayor de edad");
    } else {
      alert("No es mayor de edad");
    }
  }
  
  generaDni(){
    let dni = Math.floor(Math.random() * 99999999) + 1000000;
    this.dni = dni;
    return dni;
  }
  mostrarDatos(){
    alert(`Nombre: ${this.nombre} \nEdad: ${this.edad} \nDNI: ${this.DNI} \nSexo: ${this.sexo} \nPeso: ${this.peso} \nAltura: ${this.altura} \nAño de nacimiento: ${this.año} \nDni: ${this.dni}`);
  }
}
