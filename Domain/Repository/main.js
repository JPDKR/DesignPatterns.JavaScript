// archivo: main.js
const Cliente = require('./Cliente');
const Producto = require('./Producto');
const Pedido = require('./Pedido');

const ClienteRepository = require('./ClienteRepository');
const ProductoRepository = require('./ProductoRepository');
const PedidoRepository = require('./PedidoRepository');

// Crear repositorios
const clienteRepo = new ClienteRepository();
const productoRepo = new ProductoRepository();
const pedidoRepo = new PedidoRepository();

// Agregar clientes
const cliente1 = new Cliente(1, 'Juan Pérez', 'juan@example.com');
const cliente2 = new Cliente(2, 'María López', 'maria@example.com');
clienteRepo.agregar(cliente1);
clienteRepo.agregar(cliente2);

// Agregar productos
const producto1 = new Producto(1, 'Laptop', 1500);
const producto2 = new Producto(2, 'Smartphone', 800);
productoRepo.agregar(producto1);
productoRepo.agregar(producto2);

// Crear y agregar pedidos
const pedido1 = new Pedido(1, cliente1);
pedido1.agregarProducto(producto1, 1);
pedido1.agregarProducto(producto2, 2);
pedidoRepo.agregar(pedido1);

const pedido2 = new Pedido(2, cliente2);
pedido2.agregarProducto(producto2, 1);
pedidoRepo.agregar(pedido2);

// Obtener y mostrar datos
console.log('Clientes:', clienteRepo.obtenerTodos());
console.log('Productos:', productoRepo.obtenerTodos());
console.log('Pedidos:', pedidoRepo.obtenerTodos());
console.log(`Total del pedido 1: $${pedido1.calcularTotal()}`);
console.log(`Total del pedido 2: $${pedido2.calcularTotal()}`);
