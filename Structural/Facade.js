// Definir la Clases de Subsistema
// Subsistema: Reproductor de Audio
class ReproductorAudio {
  reproducirAudio() {
    console.log('Reproduciendo audio...');
  }

  detenerAudio() {
    console.log('Deteniendo audio...');
  }
}

// Subsistema: Reproductor de Video
class ReproductorVideo {
  reproducirVideo() {
    console.log('Reproduciendo video...');
  }

  detenerVideo() {
    console.log('Deteniendo video...');
  }
}

// Subsistema: Reproductor de Subtítulos
class ReproductorSubtitulos {
  reproducirSubtitulos() {
    console.log('Mostrando subtítulos...');
  }

  detenerSubtitulos() {
    console.log('Ocultando subtítulos...');
  }
}

// Implementar la fachada
// Fachada: ReproductorFacade
class ReproductorFacade {
  constructor() {
    this.reproductorAudio = new ReproductorAudio();
    this.reproductorVideo = new ReproductorVideo();
    this.reproductorSubtitulos = new ReproductorSubtitulos();
  }

  reproducirTodo() {
    this.reproductorAudio.reproducirAudio();
    this.reproductorVideo.reproducirVideo();
    this.reproductorSubtitulos.reproducirSubtitulos();
  }

  detenerTodo() {
    this.reproductorAudio.detenerAudio();
    this.reproductorVideo.detenerVideo();
    this.reproductorSubtitulos.detenerSubtitulos();
  }
}

// Utilizar la Fachada
// Uso del patrón Facade
const reproductor = new ReproductorFacade();

// Iniciar la reproducción de todos los componentes
reproductor.reproducirTodo();

// Detener la reproducción de todos los componentes
reproductor.detenerTodo();
