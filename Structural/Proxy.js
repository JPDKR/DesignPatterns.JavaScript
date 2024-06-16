// Definir la interfaz y la clase real
// Interfaz: Imagen
class Imagen {
  mostrar() {}
}

// Clase Real: ImagenReal
class ImagenReal extends Imagen {
  constructor(nombre) {
    super();
    this.nombre = nombre;
    this.cargarImagen();
  }

  cargarImagen() {
    console.log(`Cargando imagen: ${this.nombre}`);
  }

  mostrar() {
    console.log(`Mostrando imagen: ${this.nombre}`);
  }
}

// Implementar el Proxy
// Proxy: ProxyImagen
class ProxyImagen extends Imagen {
  constructor(nombre) {
    super();
    this.nombre = nombre;
    this.imagenReal = null;
  }

  mostrar() {
    if (!this.imagenReal) {
      this.imagenReal = new ImagenReal(this.nombre);
    }
    this.imagenReal.mostrar();
  }
}

// Utilizar el Proxy
// Uso del patrón Proxy
const proxyImagen = new ProxyImagen('foto1.jpg');

// Primera carga
proxyImagen.mostrar();

// Segunda carga (utilizando el cacheado)
proxyImagen.mostrar();
