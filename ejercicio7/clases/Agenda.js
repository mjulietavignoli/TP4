export class Agenda {
  constructor(tamañoMaximo = 10) {
    this.tamañoMaximo = tamañoMaximo;
    this.contactos = [];
  }
  aniadirContacto(contacto) {
    if (this.contactos.length < this.tamañoMaximo) {
      this.contactos.push(contacto);
    } else {
      prompt("Lista de contactos llena");
    }
  }
  existeContacto(contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === contacto.nombre) {
        console.log("Ese contacto ya existe");
      }
    }
  }
  listarContactos() {
    for (let i = 0; i < this.contactos.length; i++) {
      console.log(this.contactos[i]);
    }
  }
  buscarContacto(nombre) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === nombre) {
        console.log(
          `El teléfono del contacto ${contacto[i].nombre} es ${contacto[i].telefono}`
        );
      }
    }
  }
  eliminarContacto(nombre) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === nombre) {
        this.contactos.splice(i, 1);
      }
    }
  }
  agendaLlena() {
    if (this.contactos.length >= this.tamañoMaximo) {
      console.log("La agenda está llena");
    } else {
      console.log("La agenda aún tiene espacio");
    }
  }
  huecosLibres() {
    if (this.contactos.length <= this.tamañoMaximo) {
      let espacio = this.tamañoMaximo - this.contactos.length;
      console.log(`Todavía se pueden agendar ${espacio} contactos`);
    } else {
      console.log("La agenda está llena");
    }
  }
}
