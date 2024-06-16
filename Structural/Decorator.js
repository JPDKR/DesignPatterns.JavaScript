// Definir la interfaz Componente
// Interfaz Componente: Café
class Cafe {
  costo() {
    return 10; // Precio base del café
  }

  descripcion() {
    return 'Café simple'; // Descripción base del café
  }
}

// Implementra la clase base (Café simple)
// Clase base: Café simple
class CafeSimple extends Cafe {
  costo() {
    return super.costo();
  }

  descripcion() {
    return super.descripcion();
  }
}

// Implementar Decoradores (Ingredientes adiionales)
// Decorador: Leche
class Leche extends Cafe {
  constructor(cafe) {
    super();
    this.cafeDecorado = cafe;
  }

  costo() {
    return this.cafeDecorado.costo() + 3; // Costo adicional por leche
  }

  descripcion() {
    return this.cafeDecorado.descripcion() + ', con leche'; // Descripción modificada
  }
}

// Decorador: Caramelo
class Caramelo extends Cafe {
  constructor(cafe) {
    super();
    this.cafeDecorado = cafe;
  }

  costo() {
    return this.cafeDecorado.costo() + 5; // Costo adicional por caramelo
  }

  descripcion() {
    return this.cafeDecorado.descripcion() + ', con caramelo'; // Descripción modificada
  }
}

// Utilizar el patrón Decorator
// Uso del patrón Decorator
let cafe = new CafeSimple();
console.log(cafe.descripcion(), 'Costo:', cafe.costo());

cafe = new Leche(cafe);
console.log(cafe.descripcion(), 'Costo:', cafe.costo());

cafe = new Caramelo(cafe);
console.log(cafe.descripcion(), 'Costo:', cafe.costo());
