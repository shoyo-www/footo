const mongoose = require('mongoose');

const connection = mongoose.connection;

const footoDB = connection.useDb('footo');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  username: { type: String }
}, { timestamps: true });

module.exports = footoDB.model('User', UserSchema);
