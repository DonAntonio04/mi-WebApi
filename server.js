// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar CORS para todos los orígenes
app.use(cors());

// Permitir que el servidor entienda JSON
app.use(express.json());

const docentes = [
  { id: 1, nombre: 'Miguel López', materia: 'Matemáticas' },
  { id: 2, nombre: 'Laura Pérez', materia: 'Historia' },
];

// Endpoint principal
app.get('/api/docentes', (req, res) => {
  res.json(docentes);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
