// Modelo: TareaModel
class TareaModel {
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea) {
      this.tareas.push(tarea);
    }
  
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    }
  
    obtenerTareas() {
      return this.tareas;
    }
  }

  // Controlador: TareaController
class TareaController {
    constructor(modelo, vista) {
      this.modelo = modelo;
      this.vista = vista;
    }
  
    agregarTarea() {
      const inputTarea = document.getElementById('inputTarea');
      const nuevaTarea = inputTarea.value.trim();
      
      if (nuevaTarea !== '') {
        this.modelo.agregarTarea(nuevaTarea);
        inputTarea.value = '';
        this.actualizarVista();
      }
    }
  
    eliminarTarea(index) {
      this.modelo.eliminarTarea(index);
      this.actualizarVista();
    }
  
    actualizarVista() {
      const listaTareas = document.getElementById('listaTareas');
      listaTareas.innerHTML = '';
  
      this.modelo.obtenerTareas().forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;
        li.addEventListener('click', () => this.eliminarTarea(index));
        listaTareas.appendChild(li);
      });
    }
  }
  
  // Inicialización del MVC
  const modelo = new TareaModel();
  const vista = document; // La vista en este caso es el documento HTML
  const controlador = new TareaController(modelo, vista);
  
  // Actualizar la vista inicial
  controlador.actualizarVista();
  