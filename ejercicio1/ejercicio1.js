//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    color: "rojo",
    marca: "audi",
    modelo: "a4",
    estado: false,
    encender: function() {
        this.estado = true;
        console.log('El auto está encendido');
    },
    apagar: function() {
        this.estado = false;
        console.log('El auto está apagado');
    },
};

auto.encender();
auto.apagar();


