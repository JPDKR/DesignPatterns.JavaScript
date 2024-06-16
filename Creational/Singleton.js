// Implementación básica de Singleton no segura para subprocesos en JavaScript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  // Métodos de ejemplo
  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}

const instance1 = new Singleton();
instance1.setData('Datos de ejemplo');

const instance2 = new Singleton();
console.log(instance2.getData());  // Salida: 'Datos de ejemplo'
