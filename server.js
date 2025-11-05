// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Habilitar CORS (permite peticiones desde tu PWA)
app.use(cors({
  origin: '*', // Puedes reemplazar '*' por la URL de tu PWA si quieres restringirlo
}));

// ✅ Permitir que el servidor entienda JSON
app.use(express.json());

// ✅ Datos simulados (tu API original)
const docentes = [
  { id: 1, nombre: 'Miguel López', materia: 'Matemáticas' },
  { id: 2, nombre: 'Laura Pérez', materia: 'Historia' },
];

// ✅ Endpoint raíz
app.get('/', (req, res) => {
  res.send('🌐 Bienvenido a mi Web API original en Render');
});

// ✅ Endpoint para obtener docentes
app.get('/api/docentes', (req, res) => {
  res.json(docentes);
});

// ✅ Endpoint para agregar nuevos docentes (opcional)
app.post('/api/docentes', (req, res) => {
  const nuevoDocente = req.body;
  docentes.push(nuevoDocente);
  res.status(201).json({
    mensaje: 'Docente agregado correctamente',
    data: nuevoDocente
  });
});

// ✅ Render usa su propio puerto
const PORT = process.env.PORT || 3001;

// ✅ Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
