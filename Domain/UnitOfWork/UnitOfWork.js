// archivo: UnitOfWork.js
const ClienteRepository = require('./ClienteRepository');
const ProductoRepository = require('./ProductoRepository');
const PedidoRepository = require('./PedidoRepository');

class UnitOfWork {
  constructor() {
    this.clienteRepo = new ClienteRepository();
    this.productoRepo = new ProductoRepository();
    this.pedidoRepo = new PedidoRepository();
    this.nuevos = [];
    this.modificados = [];
    this.eliminados = [];
  }

  registrarNuevo(entidad) {
    this.nuevos.push(entidad);
  }

  registrarModificado(entidad) {
    this.modificados.push(entidad);
  }

  registrarEliminado(entidad) {
    this.eliminados.push(entidad);
  }

  commit() {
    this.nuevos.forEach(entidad => {
      if (entidad instanceof Cliente) {
        this.clienteRepo.agregar(entidad);
      } else if (entidad instanceof Producto) {
        this.productoRepo.agregar(entidad);
      } else if (entidad instanceof Pedido) {
        this.pedidoRepo.agregar(entidad);
      }
    });

    this.modificados.forEach(entidad => {
      if (entidad instanceof Cliente) {
        this.clienteRepo.actualizar(entidad.id, entidad);
      } else if (entidad instanceof Producto) {
        this.productoRepo.actualizar(entidad.id, entidad);
      } else if (entidad instanceof Pedido) {
        this.pedidoRepo.actualizar(entidad.id, entidad);
      }
    });

    this.eliminados.forEach(entidad => {
      if (entidad instanceof Cliente) {
        this.clienteRepo.eliminar(entidad.id);
      } else if (entidad instanceof Producto) {
        this.productoRepo.eliminar(entidad.id);
      } else if (entidad instanceof Pedido) {
        this.pedidoRepo.eliminar(entidad.id);
      }
    });

    this.nuevos = [];
    this.modificados = [];
    this.eliminados = [];
  }
}

module.exports = UnitOfWork;
