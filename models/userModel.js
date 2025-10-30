const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  username: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);