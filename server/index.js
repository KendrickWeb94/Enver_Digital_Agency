const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const dbURI = 'mongodb://localhost:27017/enver';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Import models
const User = require('./models/User');
const Dashboard = require('./models/dashboard');

// Authentication Routes
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Dashboard Routes
app.post('/dashboard', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newDashboard = new Dashboard({ title, description });
    await newDashboard.save();
    res.status(201).send('Dashboard entry created');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/dashboard', async (req, res) => {
  try {
    const dashboards = await Dashboard.find();
    res.status(200).json(dashboards);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
