export class Agenda {
  constructor(tamañoMaximo = 10) {
    this.tamañoMaximo = tamañoMaximo;
    this.contactos = [];
  }
  aniadirContacto(contacto) {
    if (this.agendaLlena(false)) {
      console.error("Agenda llena");
      return;
    }
    this.contactos.push(contacto);
  }
  buscarContacto(nombre, mostrarNumero = true) {
    const contactoEncontrado = this.contactos.find((contactoActual) => {
      return (
        contactoActual.nombre.trim().toLowerCase() === nombre.trim().toLowerCase()
      );
    });
    if (mostrarNumero) {
      if (contactoEncontrado) {
        console.log(contactoEncontrado.telefono);
      } else {
        console.log("No se encontró el contacto");
      }
    }
    return contactoEncontrado;
  }
  existeContacto(nombre) {
    const contactoEncontrado = this.buscarContacto(nombre, false);
    if (contactoEncontrado) {
      console.log(`Existe un contacto con el nombre de ${nombre}`);
    } else {
      console.log(`No existe un contacto con el nombre de ${nombre}`);
    }
    return Boolean(contactoEncontrado);
  }
  listarContactos() {
    console.log("Listando los contactos");
    let mensaje = "";
    this.contactos.forEach((contacto, index) => {
      mensaje += `${index + 1}: ${contacto.nombre} - ${contacto.telefono}\n`;
    });
    console.log(mensaje);
  }

  agendaLlena(mostrarMensaje = true) {
    const estaLlena = this.contactos.length >= this.tamañoMaximo;
    if (mostrarMensaje) {
      if (estaLlena) {
        console.log("La agenda está llena");
      } else {
        console.log("La agenda no está llena");
      }
    }

    return estaLlena;
  }
  huecosLibres() {
    const longitudActual = this.contactos.length;
    console.log(`Quedan ${this.tamañoMaximo - longitudActual} espacios libres`);
    return this.tamañoMaximo - longitudActual;
  }
  eliminarContacto(nombre) {
    let indice = this.contactos.findIndex((contactoActual) => {
      return (
        contactoActual.nombre.trim().toLowerCase() === nombre.trim().toLowerCase()
      );
    });
    if (indice === -1) {
      console.log(`No existe un contacto con el nombre ${nombre}`);
      return;
    }
    console.log(`Se ha eliminado el contacto ${nombre}`);
    this.contactos.splice(indice, 1);
  }
}
