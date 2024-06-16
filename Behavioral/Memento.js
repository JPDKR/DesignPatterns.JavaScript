// Definir el Originator
// Originator: Editor de texto
class EditorTexto {
  constructor() {
    this.texto = '';
  }

  agregarTexto(nuevoTexto) {
    this.texto += nuevoTexto;
  }

  obtenerTexto() {
    return this.texto;
  }

  guardarEstado() {
    return new Memento(this.texto);
  }

  restaurarEstado(memento) {
    this.texto = memento.getEstado();
  }
}

// Definir el Memento
// Memento: Estado capturado del Editor de texto
class Memento {
  constructor(texto) {
    this.textoGuardado = texto;
  }

  getEstado() {
    return this.textoGuardado;
  }
}

// Definir el Caretaker
// Caretaker: Cuidador de Mementos
class Caretaker {
  constructor() {
    this.mementos = [];
  }

  agregarMemento(memento) {
    this.mementos.push(memento);
  }

  obtenerUltimoMemento() {
    if (this.mementos.length > 0) {
      return this.mementos.pop();
    }
    return null;
  }
}

// Utilizar el patrón Memento
// Uso del patrón Memento
const editor = new EditorTexto();
const caretaker = new Caretaker();

// Agregar texto al editor
editor.agregarTexto('Hola, ');
console.log('Texto actual:', editor.obtenerTexto());

// Guardar el estado actual (Memento)
caretaker.agregarMemento(editor.guardarEstado());

// Agregar más texto al editor
editor.agregarTexto('mundo!');
console.log('Texto actual:', editor.obtenerTexto());

// Restaurar el estado anterior (Memento)
const ultimoEstado = caretaker.obtenerUltimoMemento();
if (ultimoEstado) {
  editor.restaurarEstado(ultimoEstado);
}
console.log('Texto restaurado:', editor.obtenerTexto());
