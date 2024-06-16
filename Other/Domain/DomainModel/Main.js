// archivo: main.js
const Cliente = require('./Cliente');
const Producto = require('./Producto');
const Pedido = require('./Pedido');

// Crear clientes
const cliente1 = new Cliente(1, 'Juan Pérez', 'juan@example.com');
const cliente2 = new Cliente(2, 'María López', 'maria@example.com');

// Crear productos
const producto1 = new Producto(1, 'Laptop', 1500);
const producto2 = new Producto(2, 'Smartphone', 800);

// Crear pedidos
const pedido1 = new Pedido(1, cliente1);
pedido1.agregarProducto(producto1, 1);
pedido1.agregarProducto(producto2, 2);

const pedido2 = new Pedido(2, cliente2);
pedido2.agregarProducto(producto2, 1);

// Calcular total de pedidos
console.log(`Total del pedido 1: $${pedido1.calcularTotal()}`);
console.log(`Total del pedido 2: $${pedido2.calcularTotal()}`);
