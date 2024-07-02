// archivo: consumer.js
const EventEmitter = require('events');

class Consumer extends EventEmitter {
  constructor(queue) {
    super();
    this.queue = queue;
  }

  consume() {
    if (!this.queue.isEmpty()) {
      const task = this.queue.dequeue();
      console.log(`Consumed: ${task}`);
    }
  }
}

module.exports = Consumer;
