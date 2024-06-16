// Clase base Vehiculo
class Vehiculo {
    constructor(modelo, tipo) {
      this.modelo = modelo;
      this.tipo = tipo;
    }
  
    presentar() {
      console.log(`Este es un ${this.tipo} modelo ${this.modelo}`);
    }
  }
  
  // Subclase Coche que extiende de Vehiculo
  class Coche extends Vehiculo {
    constructor(modelo) {
      super(modelo, 'coche');
    }
  }
  
  // Subclase Bicicleta que extiende de Vehiculo
  class Bicicleta extends Vehiculo {
    constructor(modelo) {
      super(modelo, 'bicicleta');
    }
  }
  
  // Factory Method para crear vehículos
  function fabricaVehiculos(tipo, modelo) {
    switch (tipo) {
      case 'coche':
        return new Coche(modelo);
      case 'bicicleta':
        return new Bicicleta(modelo);
      default:
        throw new Error('Tipo de vehículo no válido');
    }
  }
  
  // Uso del Factory Method para crear diferentes tipos de vehículos
  const miCoche = fabricaVehiculos('coche', 'Sedán');
  const miBici = fabricaVehiculos('bicicleta', 'MTB');
  
  miCoche.presentar(); // Salida: Este es un coche modelo Sedán
  miBici.presentar(); // Salida: Este es una bicicleta modelo MTB
  