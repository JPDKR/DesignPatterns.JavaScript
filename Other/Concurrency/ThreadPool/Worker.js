// archivo: worker.js
const { parentPort } = require('worker_threads');

parentPort.on('message', (num) => {
  const result = factorial(num);
  parentPort.postMessage(result);
});

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}