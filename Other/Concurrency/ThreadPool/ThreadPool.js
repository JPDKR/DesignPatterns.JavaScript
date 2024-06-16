// archivo: ThreadPool.js
const { Worker } = require('worker_threads');

class ThreadPool {
  constructor(numThreads, workerPath) {
    this.numThreads = numThreads;
    this.workerPath = workerPath;
    this.workers = [];
    this.queue = [];
    this.activeWorkers = 0;

    for (let i = 0; i < numThreads; i++) {
      this.workers.push(new Worker(workerPath));
    }

    this.workers.forEach(worker => {
      worker.on('message', (result) => {
        this.activeWorkers--;
        this.runNextTask();
        this.onTaskCompleted && this.onTaskCompleted(result);
      });

      worker.on('error', (error) => {
        this.activeWorkers--;
        this.runNextTask();
        this.onError && this.onError(error);
      });
    });
  }

  runNextTask() {
    if (this.queue.length > 0 && this.activeWorkers < this.numThreads) {
      const { worker, task } = this.queue.shift();
      this.activeWorkers++;
      worker.postMessage(task);
    }
  }

  runTask(task) {
    const worker = this.workers.find(w => w.threadId % this.numThreads === this.activeWorkers % this.numThreads);
    this.queue.push({ worker, task });
    this.runNextTask();
  }

  onTaskCompleted(callback) {
    this.onTaskCompleted = callback;
  }

  onError(callback) {
    this.onError = callback;
  }
}

module.exports = ThreadPool;
