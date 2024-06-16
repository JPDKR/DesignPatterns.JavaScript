// Definir la clase principal
// Producto: Hamburguesa
class Hamburguesa {
  constructor() {
    this.pan = null;
    this.carne = null;
    this.queso = false;
    this.lechuga = false;
    this.tomate = false;
  }

  mostrar() {
    console.log(`Hamburguesa con: ${this.pan}, ${this.carne}, Queso: ${this.queso}, Lechuga: ${this.lechuga}, Tomate: ${this.tomate}`);
  }
}

// Definir la interfaz del Constructor (Builder)
// Interfaz Builder: ConstructorHamburguesa
class ConstructorHamburguesa {
  constructor() {
    this.hamburguesa = new Hamburguesa();
  }

  construirPan() {
    throw new Error('Este método debe ser implementado por subclases.');
  }

  construirCarne() {
    throw new Error('Este método debe ser implementado por subclases.');
  }

  añadirQueso() {
    this.hamburguesa.queso = true;
  }

  añadirLechuga() {
    this.hamburguesa.lechuga = true;
  }

  añadirTomate() {
    this.hamburguesa.tomate = true;
  }

  obtenerHamburguesa() {
    return this.hamburguesa;
  }
}

// Implementar Constructores Concretor
// Constructor concreto: ConstructorHamburguesaSimple
class ConstructorHamburguesaSimple extends ConstructorHamburguesa {
  construirPan() {
    this.hamburguesa.pan = 'Pan simple';
  }

  construirCarne() {
    this.hamburguesa.carne = 'Carne normal';
  }
}

// Constructor concreto: ConstructorHamburguesaCompleta
class ConstructorHamburguesaCompleta extends ConstructorHamburguesa {
  construirPan() {
    this.hamburguesa.pan = 'Pan artesanal';
  }

  construirCarne() {
    this.hamburguesa.carne = 'Carne Angus';
  }

  añadirQueso() {
    super.añadirQueso();
    console.log('Agregando queso cheddar');
  }

  añadirLechuga() {
    super.añadirLechuga();
    console.log('Agregando lechuga fresca');
  }

  añadirTomate() {
    super.añadirTomate();
    console.log('Agregando rodajas de tomate');
  }
}

// Utilizar el Patrón Builder
// Uso del patrón Builder
const constructorSimple = new ConstructorHamburguesaSimple();
constructorSimple.construirPan();
constructorSimple.construirCarne();

const hamburguesaSimple = constructorSimple.obtenerHamburguesa();
hamburguesaSimple.mostrar();

console.log('---');

const constructorCompleto = new ConstructorHamburguesaCompleta();
constructorCompleto.construirPan();
constructorCompleto.construirCarne();
constructorCompleto.añadirQueso();
constructorCompleto.añadirLechuga();
constructorCompleto.añadirTomate();

const hamburguesaCompleta = constructorCompleto.obtenerHamburguesa();
hamburguesaCompleta.mostrar();
