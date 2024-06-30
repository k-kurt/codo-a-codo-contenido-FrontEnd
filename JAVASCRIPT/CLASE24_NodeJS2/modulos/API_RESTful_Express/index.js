//falta la pegada a la base de datos

const express = require('express');
const app = express();
const port = 3000;

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

app.use(express.json());

// Obtener todos los usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

// Obtener un usuario por ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});




// Crear un nuevo usuario
app.post('/users', (req, res) => {
    const user = {
      id: users.length + 1,
      name: req.body.name
    };
    users.push(user);
    res.status(201).json(user);
  });
  
  // Actualizar un usuario existente
  app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
  
    user.name = req.body.name;
    res.json(user);
  });
  
  // Eliminar un usuario
  app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');
  
    users.splice(userIndex, 1);
    res.status(204).send();
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
  