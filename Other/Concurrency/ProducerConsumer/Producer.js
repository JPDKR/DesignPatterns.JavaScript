// archivo: producer.js
const EventEmitter = require('events');

class Producer extends EventEmitter {
  constructor(queue) {
    super();
    this.queue = queue;
  }

  produce(task) {
    this.queue.enqueue(task);
    console.log(`Produced: ${task}`);
    this.emit('produced');
  }
}

module.exports = Producer;
