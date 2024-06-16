// archivo: PedidoRepository.js
const Pedido = require('./Pedido');

class PedidoRepository {
  constructor() {
    this.pedidos = [];
  }

  agregar(pedido) {
    this.pedidos.push(pedido);
  }

  obtenerTodos() {
    return this.pedidos;
  }

  obtenerPorId(id) {
    return this.pedidos.find(pedido => pedido.id === id);
  }

  actualizar(id, datosActualizados) {
    const pedido = this.obtenerPorId(id);
    if (pedido) {
      Object.assign(pedido, datosActualizados);
    }
    return pedido;
  }

  eliminar(id) {
    this.pedidos = this.pedidos.filter(pedido => pedido.id !== id);
  }
}

module.exports = PedidoRepository;
