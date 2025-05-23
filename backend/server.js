const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const app = express();
const colors = require('colors');
const { errorHandler } = require("./middleware/errorMiddlesWare")

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/tareas', require('./routes/tareasRoutes'));
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
