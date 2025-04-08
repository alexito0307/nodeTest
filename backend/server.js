const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const app = express();
const colors = require('colors');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/tareas', require('./routes/tareasRoutes'));
app.get('/api/tareas', (req, res)=> {
  res.send('Obtener Tareasssss');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
