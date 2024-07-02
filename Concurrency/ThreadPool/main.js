// archivo: main.js
const ThreadPool = require('./ThreadPool');
const path = require('path');

// Crear un ThreadPool con 4 hilos de trabajo
const threadPool = new ThreadPool(4, path.resolve(__dirname, 'worker.js'));

threadPool.onTaskCompleted((result) => {
  console.log(`Resultado: ${result}`);
});

threadPool.onError((error) => {
  console.error(`Error: ${error}`);
});

// Enviar tareas al ThreadPool
const tasks = [5, 10, 15, 20, 25];
tasks.forEach(task => {
  threadPool.runTask(task);
});
