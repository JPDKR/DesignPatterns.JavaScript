// Definir la clase Existente (Adaptee)
// Clase existente (Adaptee)
class MotorElectrico {
  conectar() {
    console.log('Conectando motor eléctrico');
  }

  activar() {
    console.log('Activando motor eléctrico');
  }

  moverMasRapido() {
    console.log('Moviendo más rápido el motor eléctrico');
  }

  detener() {
    console.log('Deteniendo motor eléctrico');
  }
}

// Definir la interfaz esperada (Target)
// Interfaz esperada (Target)
class MotorInterface {
  conectar() {}
  activar() {}
  mover() {}
  detener() {}
}

// Implementar el Adapter
// Adapter: MotorAdapter
class MotorAdapter extends MotorInterface {
  constructor() {
    super();
    this.motorElectrico = new MotorElectrico();
  }

  conectar() {
    this.motorElectrico.conectar();
  }

  activar() {
    this.motorElectrico.activar();
  }

  mover() {
    this.motorElectrico.moverMasRapido();
  }

  detener() {
    this.motorElectrico.detener();
  }
}

// Utilizar el Adapter
// Cliente
function usarMotor(motor) {
  motor.conectar();
  motor.activar();
  motor.mover();
  motor.detener();
}

// Uso del Adapter
const motorAdapter = new MotorAdapter();
usarMotor(motorAdapter);