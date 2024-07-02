// archivo: tasksService.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tareas = [
  { id: 1, descripcion: 'Aprender SOA', completado: false },
  { id: 2, descripcion: 'Escribir código', completado: false }
];

// Obtener todas las tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// Crear una nueva tarea
app.post('/tareas', (req, res) => {
  const nuevaTarea = {
    id: tareas.length + 1,
    descripcion: req.body.descripcion,
    completado: false
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Actualizar una tarea
app.put('/tareas/:id', (req, res) => {
  const tarea = tareas.find(t => t.id == req.params.id);
  if (tarea) {
    tarea.descripcion = req.body.descripcion;
    tarea.completado = req.body.completado;
    res.json(tarea);
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
});

// Eliminar una tarea
app.delete('/tareas/:id', (req, res) => {
  tareas = tareas.filter(t => t.id != req.params.id);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Servicio de tareas escuchando en http://localhost:${port}`);
});

// archivo: frontend.js

const API_URL = 'http://localhost:3000/tareas';

async function obtenerTareas() {
  const response = await fetch(API_URL);
  const tareas = await response.json();
  actualizarVista(tareas);
}

async function agregarTarea() {
  const inputTarea = document.getElementById('inputTarea');
  const descripcion = inputTarea.value.trim();

  if (descripcion) {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ descripcion })
    });

    inputTarea.value = '';
    obtenerTareas();
  }
}

async function eliminarTarea(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });

  obtenerTareas();
}

function actualizarVista(tareas) {
  const listaTareas = document.getElementById('listaTareas');
  listaTareas.innerHTML = '';

  tareas.forEach(tarea => {
    const li = document.createElement('li');
    li.textContent = tarea.descripcion;
    li.appendChild(crearBotonEliminar(tarea.id));
    listaTareas.appendChild(li);
  });
}

function crearBotonEliminar(id) {
  const button = document.createElement('button');
  button.textContent = 'Eliminar';
  button.onclick = () => eliminarTarea(id);
  return button;
}

// Obtener tareas al cargar la página
obtenerTareas();
