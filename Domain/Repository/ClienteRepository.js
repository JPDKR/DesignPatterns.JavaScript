// archivo: ClienteRepository.js
const Cliente = require('./Cliente');

class ClienteRepository {
  constructor() {
    this.clientes = [];
  }

  agregar(cliente) {
    this.clientes.push(cliente);
  }

  obtenerTodos() {
    return this.clientes;
  }

  obtenerPorId(id) {
    return this.clientes.find(cliente => cliente.id === id);
  }

  actualizar(id, datosActualizados) {
    const cliente = this.obtenerPorId(id);
    if (cliente) {
      Object.assign(cliente, datosActualizados);
    }
    return cliente;
  }

  eliminar(id) {
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
  }
}

module.exports = ClienteRepository;
