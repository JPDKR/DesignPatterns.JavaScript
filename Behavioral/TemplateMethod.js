// Definir la clase Base con el Método Plantilla
// Clase base: Bebida
class Bebida {
  prepararYservir() {
    this.hervirAgua();
    this.prepararBebida();
    this.servirEnTaza();
    this.agregarAderezos();
  }

  hervirAgua() {
    console.log('Hirviendo agua');
  }

  servirEnTaza() {
    console.log('Sirviendo en una taza');
  }

  // Métodos abstractos que deben ser implementados por subclases
  prepararBebida() {
    throw new Error('Método prepararBebida debe ser implementado por subclases');
  }

  agregarAderezos() {
    // Método opcional, puede ser sobrescrito por subclases si es necesario
  }
}

// Crear Subclases específicas
// Subclase: Té
class Te extends Bebida {
  prepararBebida() {
    console.log('Preparando té');
  }

  agregarAderezos() {
    console.log('Agregando limón');
  }
}

// Subclase: Café
class Cafe extends Bebida {
  prepararBebida() {
    console.log('Preparando café');
  }

  agregarAderezos() {
    console.log('Agregando azúcar y leche');
  }
}

// Utilizar el patrón Template Method
// Uso del patrón Template Method
console.log('Preparando y sirviendo un té:');
const te = new Te();
te.prepararYservir();

console.log('\nPreparando y sirviendo un café:');
const cafe = new Cafe();
cafe.prepararYservir();
