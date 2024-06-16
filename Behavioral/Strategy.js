// Definir las estrategias
// Interfaz Estrategia
class EstrategiaImpuestos {
  calcularImpuestos(monto) {
    throw new Error('Este método debe ser implementado por subclases.');
  }
}

// Estrategia concreta: Impuesto de ventas
class ImpuestoVentas extends EstrategiaImpuestos {
  calcularImpuestos(monto) {
    return monto * 0.08; // Impuesto de ventas del 8%
  }
}

// Estrategia concreta: Impuesto de servicio
class ImpuestoServicio extends EstrategiaImpuestos {
  calcularImpuestos(monto) {
    return monto * 0.1; // Impuesto de servicio del 10%
  }
}

// Estrategia concreta: Impuesto de importación
class ImpuestoImportacion extends EstrategiaImpuestos {
  calcularImpuestos(monto) {
    return monto * 0.15; // Impuesto de importación del 15%
  }
}

// Definir el contexto
// Contexto: Calculadora de impuestos
class CalculadoraImpuestos {
  constructor(estrategia) {
    this.estrategia = estrategia;
  }

  // Método para cambiar la estrategia de cálculo
  cambiarEstrategia(estrategia) {
    this.estrategia = estrategia;
  }

  // Método para calcular impuestos según la estrategia actual
  calcularImpuestos(monto) {
    return this.estrategia.calcularImpuestos(monto);
  }
}

// Utilizar el patrón Strategy
// Uso del patrón Strategy
const calculadora = new CalculadoraImpuestos(new ImpuestoVentas());
let montoCompra = 100;

console.log(`Impuestos a pagar por una compra de ${montoCompra}$:`);
console.log(`- Impuesto de ventas: ${calculadora.calcularImpuestos(montoCompra)}$`);

calculadora.cambiarEstrategia(new ImpuestoServicio());
console.log(`- Impuesto de servicio: ${calculadora.calcularImpuestos(montoCompra)}$`);

calculadora.cambiarEstrategia(new ImpuestoImportacion());
console.log(`- Impuesto de importación: ${calculadora.calcularImpuestos(montoCompra)}$`);
