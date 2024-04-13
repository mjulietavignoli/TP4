/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad) {
        this.saldo += cantidad;
    },
    extraer: function(cantidad) {
        this.saldo -= cantidad;
    },
    informar: function() {
        alert(`El saldo de la cuenta es ${this.saldo}`);
    }
}

let opcion = parseInt(prompt('Eliga la opción \n1. Añadir dinero \n2. Extraer dinero \n3. Mostrar estado de la cuenta \n4. Salir'));

while (opcion !== 4) {
    if (opcion === 1) {
        let cantAñadir = Number(prompt('Ingrese el monto a depositar'));
        cuenta.ingresar(cantAñadir);
        cuenta.informar();
    } else if (opcion === 2) {
        let cantExtraer = Number(prompt('Ingrese el monto a retirar'));
        cuenta.extraer(cantExtraer);
        cuenta.informar();
    } else if (opcion === 3) {
        cuenta.informar();
    } else {
        alert('Opción no válida');
    }
    opcion = parseInt(prompt('Eliga la opción \n1. Añadir dinero \n2. Extraer dinero \n3. Mostrar estado de la cuenta \n4. Salir'));
}
