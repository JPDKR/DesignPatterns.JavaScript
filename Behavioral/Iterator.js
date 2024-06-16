// Definición de una colección que implementa el protocolo de iteradores
class Coleccion {
  constructor() {
    this.datos = [];
  }

  // Método para agregar elementos a la colección
  agregar(elemento) {
    this.datos.push(elemento);
  }

  // Método para devolver el iterador
  [Symbol.iterator]() {
    let indice = 0;
    const datos = this.datos;

    return {
      next: function() {
        if (indice < datos.length) {
          return { value: datos[indice++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
}

// Uso del iterador
const coleccion = new Coleccion();
coleccion.agregar('Elemento 1');
coleccion.agregar('Elemento 2');
coleccion.agregar('Elemento 3');

// Iterando sobre la colección
for (let elemento of coleccion) {
  console.log(elemento);
}
