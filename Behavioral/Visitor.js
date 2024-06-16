// Definir la estructura de Objetos
// Elemento geométrico: Círculo
class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  aceptarVisitante(visitante) {
    visitante.visitarCirculo(this);
  }
}

// Elemento geométrico: Rectángulo
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  aceptarVisitante(visitante) {
    visitante.visitarRectangulo(this);
  }
}

// Definir la interfaz de Visitante
// Interfaz Visitante
class VisitanteFigura {
  visitarCirculo(circulo) {
    throw new Error('Método visitarCirculo debe ser implementado por subclases');
  }

  visitarRectangulo(rectangulo) {
    throw new Error('Método visitarRectangulo debe ser implementado por subclases');
  }
}

// Implementar el Visitante Concreto
// Visitante concreto: Calculadora de área
class CalculadoraArea extends VisitanteFigura {
  visitarCirculo(circulo) {
    const area = Math.PI * circulo.radio * circulo.radio;
    console.log(`Área del círculo con radio ${circulo.radio}: ${area.toFixed(2)}`);
  }

  visitarRectangulo(rectangulo) {
    const area = rectangulo.ancho * rectangulo.alto;
    console.log(`Área del rectángulo con ancho ${rectangulo.ancho} y alto ${rectangulo.alto}: ${area}`);
  }
}

// Utilizar el Patrón Visitor
// Uso del patrón Visitor
const circulo = new Circulo(5);
const rectangulo = new Rectangulo(4, 6);

const calculadoraArea = new CalculadoraArea();

circulo.aceptarVisitante(calculadoraArea);
rectangulo.aceptarVisitante(calculadoraArea);
