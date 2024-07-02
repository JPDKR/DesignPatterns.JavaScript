// archivo: main.js
const Queue = require('./Concurrency/queue');
const Producer = require('./Concurrency/producer');
const Consumer = require('./Concurrency/consumer');

// Crear una cola compartida
const queue = new Queue();

// Crear instancias de productor y consumidor
const producer = new Producer(queue);
const consumer = new Consumer(queue);

// Manejar eventos
producer.on('produced', () => {
  consumer.consume();
});

// Simular la producción y el consumo de tareas
setInterval(() => {
  const task = `Task ${Math.floor(Math.random() * 100)}`;
  producer.produce(task);
}, 1000);

setInterval(() => {
  consumer.consume();
}, 2000);
