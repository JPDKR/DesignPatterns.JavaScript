// Definir la estructura básica
// Clase base Handler
class Handler {
  constructor() {
    this.successor = null; // Sucesor en la cadena
  }

  setSuccessor(successor) {
    this.successor = successor;
  }

  handleRequest(request) {
    if (this.successor) {
      this.successor.handleRequest(request);
    } else {
      console.log('Ningún handler puede procesar la solicitud.');
    }
  }
}

// Implementar manipuladores concretos
// Manejador concreto para el Director
class Director extends Handler {
  handleRequest(request) {
    if (request.amount <= 1000) {
      console.log(`La solicitud de ${request.amount}€ fue aprobada por el Director.`);
    } else if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

// Manejador concreto para el Gerente
class Gerente extends Handler {
  handleRequest(request) {
    if (request.amount <= 5000) {
      console.log(`La solicitud de ${request.amount}€ fue aprobada por el Gerente.`);
    } else if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

// Manejador concreto para el Presidente
class Presidente extends Handler {
  handleRequest(request) {
    if (request.amount <= 10000) {
      console.log(`La solicitud de ${request.amount}€ fue aprobada por el Presidente.`);
    } else {
      console.log(`La solicitud de ${request.amount}€ excede el límite máximo.`);
    }
  }
}

// Usar la cadena de responsabilidad
// Ejemplo de solicitud de compra
const solicitud1 = { amount: 500 };
const solicitud2 = { amount: 3500 };
const solicitud3 = { amount: 15000 };

// Crear instancias de los manipuladores
const director = new Director();
const gerente = new Gerente();
const presidente = new Presidente();

// Configurar la cadena de responsabilidad
director.setSuccessor(gerente);
gerente.setSuccessor(presidente);

// Procesar las solicitudes
director.handleRequest(solicitud1); // Salida: La solicitud de 500€ fue aprobada por el Director.
director.handleRequest(solicitud2); // Salida: La solicitud de 3500€ fue aprobada por el Gerente.
director.handleRequest(solicitud3); // Salida: La solicitud de 15000€ excede el límite máximo.
