// Definir el Mediador
// Mediador para el chat
class MediadorChat {
  constructor() {
    this.usuarios = [];
  }

  registrarUsuario(usuario) {
    this.usuarios.push(usuario);
    usuario.asignarMediador(this);
  }

  enviarMensaje(mensaje, remitente, destinatario) {
    destinatario.recibirMensaje(mensaje, remitente);
  }
}

// Definir los Usuarios
// Usuario del chat
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
    this.mediador = null;
  }

  asignarMediador(mediador) {
    this.mediador = mediador;
  }

  enviarMensaje(mensaje, destinatario) {
    this.mediador.enviarMensaje(mensaje, this, destinatario);
  }

  recibirMensaje(mensaje, remitente) {
    console.log(`${this.nombre} recibió un mensaje de ${remitente.nombre}: ${mensaje}`);
  }
}

// Utilizar el Mediador en el Sistema
// Crear el mediador y usuarios
const mediador = new MediadorChat();
const usuario1 = new Usuario('Usuario 1');
const usuario2 = new Usuario('Usuario 2');

// Registrar usuarios en el mediador
mediador.registrarUsuario(usuario1);
mediador.registrarUsuario(usuario2);

// Usuario 1 envía un mensaje a Usuario 2
usuario1.enviarMensaje('Hola, Usuario 2!', usuario2);
