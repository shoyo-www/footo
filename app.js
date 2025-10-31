const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./router/authRouter');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Footo API' });
});

const DB =  process.env.MONGO;
mongoose.connect("mongodb+srv://shoyostriker_db_user:VZClX6xJsLI9mGAz@mysongs.tekn7cb.mongodb.net/?appName=MySongs").then(()=> {
    console.log('conected');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
