// Modelo: TareaModel
class TareaModel {
    constructor(tarea) {
      this.tarea = tarea;
    }
  }

  // ViewModel: TareaViewModel
class TareaViewModel {
    constructor() {
      this.nuevaTarea = ko.observable('');
      this.tareas = ko.observableArray([]);
  
      // Métodos
      this.agregarTarea = this.agregarTarea.bind(this);
      this.eliminarTarea = this.eliminarTarea.bind(this);
    }
  
    agregarTarea() {
      if (this.nuevaTarea().trim() !== '') {
        this.tareas.push(new TareaModel(this.nuevaTarea().trim()).tarea);
        this.nuevaTarea('');
      }
    }
  
    eliminarTarea(tarea) {
      this.tareas.remove(tarea);
    }
  }

  // Aplicar el enlace de datos (data binding)
ko.applyBindings(new TareaViewModel());
