// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Habilitar CORS correctamente
app.use(cors({
  origin: '*', // Permite acceso desde cualquier origen (tu PWA local o en la nube)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

// ✅ Permitir lectura de JSON
app.use(express.json());

// ✅ Datos base (tu API original)
let docentes = [
  { id: 1, nombre: 'Miguel López', materia: 'Matemáticas' },
  { id: 2, nombre: 'Laura Pérez', materia: 'Historia' },
];

// ✅ Endpoint raíz
app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Seguridad extra
  res.send('🌐 Bienvenido a mi Web API original en Render');
});

// ✅ Obtener docentes
app.get('/api/docentes', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Seguridad extra
  res.json(docentes);
});

// ✅ Agregar docente
app.post('/api/docentes', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const nuevo = req.body;
  docentes.push(nuevo);
  res.status(201).json({ mensaje: 'Docente agregado correctamente', data: nuevo });
});

// ✅ Puerto dinámico (Render lo asigna automáticamente)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));
