// Definir el Prototipo (Clase Base)
// Prototipo: Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  // Método para clonar el prototipo
  clonar() {
    // Clonar el objeto actual (this)
    return Object.create(this);
  }
}

// Crear Instancias a partir del Prototipo
// Crear instancias de productos utilizando el prototipo
const prototipoProducto = new Producto('Producto base', 100);

const producto1 = prototipoProducto.clonar();
producto1.nombre = 'Producto 1';
producto1.precio = 150;

const producto2 = prototipoProducto.clonar();
producto2.nombre = 'Producto 2';
producto2.precio = 200;

// Utilizar los Productor Clonados
// Mostrar los productos clonados
console.log(producto1);  // Producto { nombre: 'Producto 1', precio: 150 }
console.log(producto2);  // Producto { nombre: 'Producto 2', precio: 200 }
