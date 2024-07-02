// archivo: user-service/index.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

app.listen(port, () => {
  console.log(`Servicio de usuarios escuchando en http://localhost:${port}`);
});
