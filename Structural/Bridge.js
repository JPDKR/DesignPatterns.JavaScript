// Definir las Abstracciones y las Implementaciones
// Abstracción: ControlRemoto
class ControlRemoto {
  constructor(dispositivo) {
    this.dispositivo = dispositivo;
  }

  encender() {
    this.dispositivo.encender();
  }

  apagar() {
    this.dispositivo.apagar();
  }

  ajustarVolumen(volumen) {
    this.dispositivo.ajustarVolumen(volumen);
  }

  cambiarCanal(canal) {
    this.dispositivo.cambiarCanal(canal);
  }
}

// Implementación: Dispositivo
class Dispositivo {
  constructor(nombre) {
    this.nombre = nombre;
    this.encendido = false;
    this.volumen = 50;
    this.canal = 1;
  }

  encender() {
    this.encendido = true;
    console.log(`${this.nombre} encendido`);
  }

  apagar() {
    this.encendido = false;
    console.log(`${this.nombre} apagado`);
  }

  ajustarVolumen(volumen) {
    this.volumen = volumen;
    console.log(`${this.nombre} volumen ajustado a ${this.volumen}`);
  }

  cambiarCanal(canal) {
    this.canal = canal;
    console.log(`${this.nombre} cambiado al canal ${this.canal}`);
  }
}

// Implementar las Abstracciones Específicas (Controles Remotos)
// Abstracción específica: ControlRemotoAvanzado
class ControlRemotoAvanzado extends ControlRemoto {
  mute() {
    this.dispositivo.ajustarVolumen(0);
    console.log(`${this.dispositivo.nombre} en silencio`);
  }
}

// Abstracción específica: ControlRemotoSimple
class ControlRemotoSimple extends ControlRemoto {
  constructor(dispositivo) {
    super(dispositivo);
  }
}

// Utilizar el Patrón Bridge
// Uso del patrón Bridge
const tv = new Dispositivo('Televisor');
const radio = new Dispositivo('Radio');

const controlTv = new ControlRemotoAvanzado(tv);
const controlRadio = new ControlRemotoSimple(radio);

// Interactuar con el televisor
controlTv.encender();
controlTv.ajustarVolumen(30);
controlTv.cambiarCanal(5);
controlTv.mute();
controlTv.apagar();

console.log('---');

// Interactuar con la radio
controlRadio.encender();
controlRadio.ajustarVolumen(20);
controlRadio.cambiarCanal(105);
controlRadio.apagar();
