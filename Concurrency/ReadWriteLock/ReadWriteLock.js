// archivo: ReadWriteLock.js
class ReadWriteLock {
    constructor() {
      this.readers = 0;
      this.writer = false;
      this.readQueue = [];
      this.writeQueue = [];
    }
  
    async acquireReadLock() {
      if (this.writer || this.writeQueue.length > 0) {
        return new Promise(resolve => {
          this.readQueue.push(resolve);
        });
      } else {
        this.readers++;
      }
    }
  
    releaseReadLock() {
      this.readers--;
      if (this.readers === 0 && this.writeQueue.length > 0) {
        const resolve = this.writeQueue.shift();
        this.writer = true;
        resolve();
      }
    }
  
    async acquireWriteLock() {
      if (this.writer || this.readers > 0) {
        return new Promise(resolve => {
          this.writeQueue.push(resolve);
        });
      } else {
        this.writer = true;
      }
    }
  
    releaseWriteLock() {
      this.writer = false;
      if (this.writeQueue.length > 0) {
        const resolve = this.writeQueue.shift();
        this.writer = true;
        resolve();
      } else if (this.readQueue.length > 0) {
        while (this.readQueue.length > 0) {
          const resolve = this.readQueue.shift();
          this.readers++;
          resolve();
        }
      }
    }
  }
  
  module.exports = ReadWriteLock;

  
  // archivo: main.js
const ReadWriteLock = require('./ReadWriteLock');

const lock = new ReadWriteLock();

async function readOperation(id) {
  await lock.acquireReadLock();
  console.log(`Reader ${id} starts reading`);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simular lectura
  console.log(`Reader ${id} finishes reading`);
  lock.releaseReadLock();
}

async function writeOperation(id) {
  await lock.acquireWriteLock();
  console.log(`Writer ${id} starts writing`);
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simular escritura
  console.log(`Writer ${id} finishes writing`);
  lock.releaseWriteLock();
}

// Simular operaciones de lectura y escritura
readOperation(1);
readOperation(2);
writeOperation(1);
readOperation(3);
writeOperation(2);
