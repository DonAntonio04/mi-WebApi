// Importar dependencias
const express = require('express');
const cors = require('cors');

// Inicializar app
const app = express();
app.use(cors());
app.use(express.json());

// Puerto del servidor
const PORT = 3001;

// Datos originales (tu API propia)
let docentes = [
  { id: 1, nombre: "Lopez Humo Miguel", materia: "Matemáticas" },
  { id: 2, nombre: "Sánchez Ruiz Laura", materia: "Física" },
  { id: 3, nombre: "Ramírez Torres Ana", materia: "Inglés" }
];

// Endpoint principal
app.get('/', (req, res) => {
  res.send('🌐 Bienvenido a mi Web API original');
});

// Endpoint para obtener docentes
app.get('/api/docentes', (req, res) => {
  res.json(docentes);
});

// Endpoint para agregar un nuevo docente
app.post('/api/docentes', (req, res) => {
  const nuevoDocente = req.body;
  docentes.push(nuevoDocente);
  res.status(201).json({ mensaje: "Docente agregado correctamente", data: nuevoDocente });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
