// archivo: Pedido.js
class Pedido {
    constructor(id, cliente) {
      this.id = id;
      this.cliente = cliente;
      this.productos = [];
    }
  
    agregarProducto(producto, cantidad) {
      this.productos.push({ producto, cantidad });
    }
  
    calcularTotal() {
      return this.productos.reduce((total, item) => {
        return total + item.producto.precio * item.cantidad;
      }, 0);
    }
  }
  
  module.exports = Pedido;
  