// Definir el objeto receptor
// Objeto receptor
class Calculadora {
  constructor() {
    this.valor = 0;
  }

  sumar(valor) {
    this.valor += valor;
    console.log(`Se sumó ${valor}. Resultado: ${this.valor}`);
  }

  restar(valor) {
    this.valor -= valor;
    console.log(`Se restó ${valor}. Resultado: ${this.valor}`);
  }
}

// Definir las clases de comandos
// Comando base
class Comando {
  constructor(calculadora) {
    this.calculadora = calculadora;
  }

  execute() {
    throw new Error('Método execute debe ser implementado por subclases');
  }
}

// Comando concreto para sumar
class ComandoSumar extends Comando {
  constructor(calculadora, valor) {
    super(calculadora);
    this.valor = valor;
  }

  execute() {
    this.calculadora.sumar(this.valor);
  }
}

// Comando concreto para restar
class ComandoRestar extends Comando {
  constructor(calculadora, valor) {
    super(calculadora);
    this.valor = valor;
  }

  execute() {
    this.calculadora.restar(this.valor);
  }
}

// Usar los comandos
// Crear instancia de la calculadora
const calculadora = new Calculadora();

// Crear instancias de comandos concretos
const comandoSumar = new ComandoSumar(calculadora, 10);
const comandoRestar = new ComandoRestar(calculadora, 5);

// Ejecutar los comandos
comandoSumar.execute(); // Salida: Se sumó 10. Resultado: 10
comandoRestar.execute(); // Salida: Se restó 5. Resultado: 5
