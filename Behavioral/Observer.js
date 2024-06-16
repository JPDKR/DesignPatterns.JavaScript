// Definir el objeto Observable
// Sujeto Observable
class Sujeto {
  constructor() {
    this.observadores = []; // Lista de observadores
  }

  // Método para agregar observadores
  agregarObservador(observador) {
    this.observadores.push(observador);
  }

  // Método para remover observadores
  removerObservador(observador) {
    this.observadores = this.observadores.filter(obs => obs !== observador);
  }

  // Método para notificar a todos los observadores
  notificar() {
    this.observadores.forEach(observador => {
      observador.actualizar();
    });
  }

  // Método que simula un cambio en el estado del sujeto
  realizarAccion() {
    console.log('El sujeto realizó una acción.');
    this.notificar();
  }
}

// Definir los observadores
// Interfaz Observador
class Observador {
  actualizar() {
    throw new Error('Método actualizar debe ser implementado por subclases');
  }
}

// Implementar Observadores Concretor
// Observador concreto
class Observador1 extends Observador {
  constructor(nombre) {
    super();
    this.nombre = nombre;
  }

  // Método para actualizar según la notificación del sujeto
  actualizar() {
    console.log(`Observador ${this.nombre} fue notificado y actualizó su estado.`);
  }
}

// Otro observador concreto
class Observador2 extends Observador {
  constructor(nombre) {
    super();
    this.nombre = nombre;
  }

  // Método para actualizar según la notificación del sujeto
  actualizar() {
    console.log(`Observador ${this.nombre} recibió la notificación.`);
  }
}

// Utilizar el patrón Observer
// Uso del patrón Observer
const sujeto = new Sujeto();

// Crear observadores
const observador1 = new Observador1('1');
const observador2 = new Observador2('2');

// Agregar observadores al sujeto
sujeto.agregarObservador(observador1);
sujeto.agregarObservador(observador2);

// Simular un cambio en el estado del sujeto
sujeto.realizarAccion();
