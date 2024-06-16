// Definir la estructura base
// Interfaz Expresion
class Expresion {
  interpret() {
    throw new Error('Método interpret debe ser implementado por subclases');
  }
}

// Implementar expresiones concretas
// Expresión para números
class Numero extends Expresion {
  constructor(valor) {
    super();
    this.valor = valor;
  }

  interpret() {
    return this.valor;
  }
}

// Expresión para suma
class Suma extends Expresion {
  constructor(expresionIzquierda, expresionDerecha) {
    super();
    this.expresionIzquierda = expresionIzquierda;
    this.expresionDerecha = expresionDerecha;
  }

  interpret() {
    return this.expresionIzquierda.interpret() + this.expresionDerecha.interpret();
  }
}

// Expresión para resta
class Resta extends Expresion {
  constructor(expresionIzquierda, expresionDerecha) {
    super();
    this.expresionIzquierda = expresionIzquierda;
    this.expresionDerecha = expresionDerecha;
  }

  interpret() {
    return this.expresionIzquierda.interpret() - this.expresionDerecha.interpret();
  }
}

// Crear el intérprete
// Intérprete para evaluar expresiones en RPN
class Interpreter {
  constructor() {
    this.expresionStack = [];
  }

  interpretar(expresion) {
    const tokens = expresion.split(' ');

    tokens.forEach(token => {
      if (token === '+') {
        const derecha = this.expresionStack.pop();
        const izquierda = this.expresionStack.pop();
        const suma = new Suma(izquierda, derecha);
        this.expresionStack.push(suma);
      } else if (token === '-') {
        const derecha = this.expresionStack.pop();
        const izquierda = this.expresionStack.pop();
        const resta = new Resta(izquierda, derecha);
        this.expresionStack.push(resta);
      } else {
        const numero = new Numero(parseInt(token, 10));
        this.expresionStack.push(numero);
      }
    });

    return this.expresionStack.pop().interpret();
  }
}

// Usar el intérprete
// Ejemplo de uso del intérprete
const interpreter = new Interpreter();
const resultado = interpreter.interpretar('3 4 + 5 -');
console.log(`El resultado es: ${resultado}`); // Salida: El resultado es: 2
