// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Configuración CORS definitiva
app.use(cors({
  origin: '*', // permite acceso desde cualquier origen (tu PWA o localhost)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// ✅ Datos de ejemplo
let docentes = [
  { id: 1, nombre: 'Miguel López', materia: 'Matemáticas' },
  { id: 2, nombre: 'Laura Pérez', materia: 'Historia' },
];

// ✅ Endpoint raíz
app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('🌐 Bienvenido a mi Web API original en Render');
});

// ✅ Obtener docentes
app.get('/api/docentes', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(docentes);
});

// ✅ Agregar docente
app.post('/api/docentes', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const nuevoDocente = req.body;
  docentes.push(nuevoDocente);
  res.status(201).json({ mensaje: 'Docente agregado correctamente', data: nuevoDocente });
});

// ✅ Puerto dinámico
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));
