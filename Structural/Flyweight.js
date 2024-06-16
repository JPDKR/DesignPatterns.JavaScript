// Definir la clase Flyweight
// Clase Flyweight: TareaFlyweight
class TareaFlyweight {
  constructor(estatus) {
    this.estatus = estatus;
  }

  obtenerEstatus() {
    return this.estatus;
  }
}

// Implementar el Factory para Flyweights
// Factory para Flyweights: TareaFlyweightFactory
class TareaFlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  obtenerFlyweight(estatus) {
    if (!this.flyweights[estatus]) {
      this.flyweights[estatus] = new TareaFlyweight(estatus);
    }
    return this.flyweights[estatus];
  }

  contarFlyweights() {
    let count = 0;
    for (let key in this.flyweights) {
      count++;
    }
    return count;
  }
}

// Utilizar el patrón Flyweight
// Uso del patrón Flyweight
const factory = new TareaFlyweightFactory();

function crearTarea(descripcion, estatus) {
  const flyweight = factory.obtenerFlyweight(estatus);
  return {
    descripcion,
    estatus: flyweight
  };
}

const tareas = [
  crearTarea('Tarea 1', 'completada'),
  crearTarea('Tarea 2', 'pendiente'),
  crearTarea('Tarea 3', 'completada'),
  crearTarea('Tarea 4', 'pendiente'),
  crearTarea('Tarea 5', 'completada')
];

console.log('Cantidad de flyweights creados:', factory.contarFlyweights());

tareas.forEach(tarea => {
  console.log(`Tarea: ${tarea.descripcion}, Estatus: ${tarea.estatus.obtenerEstatus()}`);
});
