// Definir la Fábrica Abstracta
// Interfaz Fábrica Abstracta: FabricaComponentesUI
class FabricaComponentesUI {
  crearBoton() {
    throw new Error('Este método debe ser implementado por subclases.');
  }

  crearVentana() {
    throw new Error('Este método debe ser implementado por subclases.');
  }
}

// Implementar Fábricas Concretas
// Fábrica concreta: FabricaComponentesUILight
class FabricaComponentesUILight extends FabricaComponentesUI {
  crearBoton() {
    return new BotonLight();
  }

  crearVentana() {
    return new VentanaLight();
  }
}

// Fábrica concreta: FabricaComponentesUIDark
class FabricaComponentesUIDark extends FabricaComponentesUI {
  crearBoton() {
    return new BotonDark();
  }

  crearVentana() {
    return new VentanaDark();
  }
}

// Definir Productos (Botones y Ventanas)
// Producto concreto: Botón Light
class BotonLight {
  render() {
    console.log('Renderizando botón estilo Light.');
  }
}

// Producto concreto: Botón Dark
class BotonDark {
  render() {
    console.log('Renderizando botón estilo Dark.');
  }
}

// Producto concreto: Ventana Light
class VentanaLight {
  render() {
    console.log('Renderizando ventana estilo Light.');
  }
}

// Producto concreto: Ventana Dark
class VentanaDark {
  render() {
    console.log('Renderizando ventana estilo Dark.');
  }
}

// Utilizar el patrón Abstract Factory
// Uso del patrón Abstract Factory
const fabricaLight = new FabricaComponentesUILight();
const botonLight = fabricaLight.crearBoton();
const ventanaLight = fabricaLight.crearVentana();

botonLight.render();    // Output: Renderizando botón estilo Light.
ventanaLight.render();  // Output: Renderizando ventana estilo Light.

const fabricaDark = new FabricaComponentesUIDark();
const botonDark = fabricaDark.crearBoton();
const ventanaDark = fabricaDark.crearVentana();

botonDark.render();    // Output: Renderizando botón estilo Dark.
ventanaDark.render();  // Output: Renderizando ventana estilo Dark.
