const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.signup = async (req, res) => {
  try {
    const { email, password, username } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: 'email already registered' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash, username });
    return res.status(201).json({ id: user._id, email: user.email });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal error' });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: 'invalid credentials' });

    return res.json({ message: 'signed in', id: user._id, email: user.email });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal error' });
  }
};