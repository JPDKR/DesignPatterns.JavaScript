// archivo: main.js
const Cliente = require('./Cliente');
const Producto = require('./Producto');
const Pedido = require('./Pedido');
const UnitOfWork = require('./UnitOfWork');

// Crear unidad de trabajo
const uow = new UnitOfWork();

// Agregar clientes
const cliente1 = new Cliente(1, 'Juan Pérez', 'juan@example.com');
const cliente2 = new Cliente(2, 'María López', 'maria@example.com');
uow.registrarNuevo(cliente1);
uow.registrarNuevo(cliente2);

// Agregar productos
const producto1 = new Producto(1, 'Laptop', 1500);
const producto2 = new Producto(2, 'Smartphone', 800);
uow.registrarNuevo(producto1);
uow.registrarNuevo(producto2);

// Crear y agregar pedidos
const pedido1 = new Pedido(1, cliente1);
pedido1.agregarProducto(producto1, 1);
pedido1.agregarProducto(producto2, 2);
uow.registrarNuevo(pedido1);

const pedido2 = new Pedido(2, cliente2);
pedido2.agregarProducto(producto2, 1);
uow.registrarNuevo(pedido2);

// Commit de la unidad de trabajo
uow.commit();

// Obtener y mostrar datos
console.log('Clientes:', uow.clienteRepo.obtenerTodos());
console.log('Productos:', uow.productoRepo.obtenerTodos());
console.log('Pedidos:', uow.pedidoRepo.obtenerTodos());
console.log(`Total del pedido 1: $${pedido1.calcularTotal()}`);
console.log(`Total del pedido 2: $${pedido2.calcularTotal()}`);
