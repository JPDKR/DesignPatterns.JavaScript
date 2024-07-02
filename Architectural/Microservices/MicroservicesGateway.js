// archivo: api-gateway/index.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

const USER_SERVICE_URL = 'http://localhost:3001/usuarios';
const TASK_SERVICE_URL = 'http://localhost:3002/tareas';

app.get('/usuarios', async (req, res) => {
  try {
    const response = await axios.get(USER_SERVICE_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error al obtener los usuarios');
  }
});

app.post('/usuarios', async (req, res) => {
  try {
    const response = await axios.post(USER_SERVICE_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).send('Error al crear el usuario');
  }
});

app.get('/tareas', async (req, res) => {
  try {
    const response = await axios.get(TASK_SERVICE_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error al obtener las tareas');
  }
});

app.post('/tareas', async (req, res) => {
  try {
    const response = await axios.post(TASK_SERVICE_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).send('Error al crear la tarea');
  }
});

app.listen(port, () => {
  console.log(`API Gateway escuchando en http://localhost:${port}`);
});
