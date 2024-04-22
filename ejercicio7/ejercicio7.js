/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */
import { Agenda } from "./clases/Agenda.js";
import { Contacto } from "./clases/Contacto.js";

let agenda = null;
let tamaño = 10;
const confirmIngresarTamaño = confirm(
  "¿Desea ingresar el tamaño de la agenda?"
);

if (confirmIngresarTamaño) {
  let tamañoCorrecto = false;
  do {
    tamaño = prompt("Ingrese el tamaño de la agenda");
    if (
      tamaño === null ||
      tamaño.trim() === "" ||
      isNaN(tamaño) ||
      tamaño % 1 !== 0
    ) {
      alert(
        "Debe ingresar un número entero válido para el tamaño de la agenda."
      );
      tamañoCorrecto = false;
    } else {
      tamañoCorrecto = true;
    }
  } while (!tamañoCorrecto);
}
agenda = new Agenda(tamaño);
let salir = false;
do {
  const opcion = prompt(
    "Eliga la opción \n1. Añadir contacto \n2. Listar agenda  \n3. Eliminar contacto \n4. Buscar contacto \n5. Averiguar si un contacto existe por nombre \n6. Ver si la agenda está llena \n7. Ver lugares disponibles en agenda \n8. Salir"
  );

  switch (opcion) {
    case "1":
      const nombre = prompt("Ingrese el nombre");
      const telefono = prompt("Ingrese el teléfono");
      const contacto = new Contacto(nombre, telefono);
      agenda.aniadirContacto(contacto);
      break;
    case "2":
      agenda.listarContactos();
      break;
    case "3":
      const nombreAEliminar = prompt("Ingrese el nombre");
      agenda.eliminarContacto(nombreAEliminar);
      break;
    case "4":
      const nombreABuscar = prompt("Ingrese el nombre");
      agenda.buscarContacto(nombreABuscar);
      break;
    case "5":
      const nombreExiste = prompt("Ingrese el nombre");
      agenda.existeContacto(nombreExiste);
      break;
    case "6":
      agenda.agendaLlena();
      break;
    case "7":
      agenda.huecosLibres();
      break;
    case "8":
    case null:
      salir = true;
    default:
      alert("Ingrese una opcion válida");
  }
} while (salir === false);
