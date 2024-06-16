// archivo: ProductoRepository.js
const Producto = require('./Producto');

class ProductoRepository {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    this.productos.push(producto);
  }

  obtenerTodos() {
    return this.productos;
  }

  obtenerPorId(id) {
    return this.productos.find(producto => producto.id === id);
  }

  actualizar(id, datosActualizados) {
    const producto = this.obtenerPorId(id);
    if (producto) {
      Object.assign(producto, datosActualizados);
    }
    return producto;
  }

  eliminar(id) {
    this.productos = this.productos.filter(producto => producto.id !== id);
  }
}

module.exports = ProductoRepository;
