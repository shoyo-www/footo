const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

const MONGO = process.env.MONGODB_URI || 'mongodb://localhost:27017/footo';
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));