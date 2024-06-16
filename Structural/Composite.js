// Definir la Interfaz Composite
// Interfaz Componente
class Componente {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método para añadir empleados o grupos
  agregar(componente) {}

  // Método para eliminar empleados o grupos
  eliminar(componente) {}

  // Método para obtener el nombre del empleado o grupo
  mostrar() {}
}

// Implementar la Clase Hoja
// Clase Hoja: Empleado
class Empleado extends Componente {
  constructor(nombre) {
    super(nombre);
  }

  mostrar() {
    console.log(`Empleado: ${this.nombre}`);
  }
}

// Implementar la clase Composite
// Clase Composite: GrupoEmpleados
class GrupoEmpleados extends Componente {
  constructor(nombre) {
    super(nombre);
    this.empleados = [];
  }

  agregar(componente) {
    this.empleados.push(componente);
  }

  eliminar(componente) {
    const indice = this.empleados.indexOf(componente);
    this.empleados.splice(indice, 1);
  }

  mostrar() {
    console.log(`Grupo: ${this.nombre}`);

    this.empleados.forEach((empleado) => {
      empleado.mostrar();
    });
  }
}

// Utlizar el patrón Composite
// Uso del patrón Composite
const gerente = new Empleado('Juan');
const ingeniero = new Empleado('Pedro');
const desarrollador = new Empleado('María');

const grupo1 = new GrupoEmpleados('Grupo de Desarrollo');
grupo1.agregar(ingeniero);
grupo1.agregar(desarrollador);

const grupo2 = new GrupoEmpleados('Grupo de Ingeniería');
grupo2.agregar(gerente);
grupo2.agregar(grupo1);

grupo2.mostrar();

/*
Salida esperada:

Grupo: Grupo de Ingeniería
Empleado: Juan
Grupo: Grupo de Desarrollo
Empleado: Pedro
Empleado: María
*/
