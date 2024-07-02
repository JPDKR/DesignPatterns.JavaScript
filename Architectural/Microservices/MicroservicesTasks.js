// archivo: task-service/index.js
const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

let tareas = [
  { id: 1, descripcion: 'Aprender microservicios', completado: false, usuarioId: 1 },
  { id: 2, descripcion: 'Escribir código', completado: false, usuarioId: 2 }
];

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.post('/tareas', (req, res) => {
  const nuevaTarea = {
    id: tareas.length + 1,
    descripcion: req.body.descripcion,
    completado: false,
    usuarioId: req.body.usuarioId
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

app.listen(port, () => {
  console.log(`Servicio de tareas escuchando en http://localhost:${port}`);
});
