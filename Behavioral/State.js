// Definir los estados
// Estado base
class EstadoReproductor {
  constructor(reproductor) {
    this.reproductor = reproductor;
  }

  // Métodos que serán implementados por los estados concretos
  reproducir() {
    throw new Error('Este método debe ser implementado por subclases.');
  }

  pausar() {
    throw new Error('Este método debe ser implementado por subclases.');
  }

  detener() {
    throw new Error('Este método debe ser implementado por subclases.');
  }
}

// Estado concreto: Reproduciendo música
class EstadoReproduciendo extends EstadoReproductor {
  reproducir() {
    console.log('El reproductor ya está reproduciendo música.');
  }

  pausar() {
    console.log('Pausando la reproducción de música.');
    this.reproductor.establecerEstado(new EstadoPausado(this.reproductor));
  }

  detener() {
    console.log('Deteniendo la reproducción de música.');
    this.reproductor.establecerEstado(new EstadoDetenido(this.reproductor));
  }
}

// Estado concreto: Pausado
class EstadoPausado extends EstadoReproductor {
  reproducir() {
    console.log('Reanudando la reproducción de música.');
    this.reproductor.establecerEstado(new EstadoReproduciendo(this.reproductor));
  }

  pausar() {
    console.log('El reproductor ya está pausado.');
  }

  detener() {
    console.log('Deteniendo la reproducción de música.');
    this.reproductor.establecerEstado(new EstadoDetenido(this.reproductor));
  }
}

// Estado concreto: Detenido
class EstadoDetenido extends EstadoReproductor {
  reproducir() {
    console.log('Iniciando la reproducción de música.');
    this.reproductor.establecerEstado(new EstadoReproduciendo(this.reproductor));
  }

  pausar() {
    console.log('No se puede pausar, el reproductor está detenido.');
  }

  detener() {
    console.log('El reproductor ya está detenido.');
  }
}

// Definir el contexto
// Contexto: Reproductor de música
class Reproductor {
  constructor() {
    this.estado = new EstadoDetenido(this);
  }

  // Método para cambiar el estado del reproductor
  establecerEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }

  // Métodos de acción que delegan al estado actual
  reproducir() {
    this.estado.reproducir();
  }

  pausar() {
    this.estado.pausar();
  }

  detener() {
    this.estado.detener();
  }
}

// Utilizar el patrón State
// Uso del patrón State
const reproductor = new Reproductor();

reproductor.reproducir(); // Output: Iniciando la reproducción de música.
reproductor.pausar();    // Output: Pausando la reproducción de música.
reproductor.reproducir(); // Output: Reanudando la reproducción de música.
reproductor.detener();   // Output: Deteniendo la reproducción de música.
