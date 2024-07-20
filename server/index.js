const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Contact = require('./models/Contact');
const Onboarding = require('./models/Onboarding'); // Import the Onboarding model

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/enver', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user instance
    const newUser = new User({ username, password: hashedPassword, email });
    // Save the user to the database
    await newUser.save();
    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, 'your_jwt_secret', { expiresIn: '1h' });
    // Respond with success message, token, and user data
    res.status(201).json({ message: 'User created successfully', token, user: newUser });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

// Save onboarding details endpoint
app.post('/onboarding', async (req, res) => {
  const { userId, phoneNumber, additionalEmail, jobRole, age, location, bio } = req.body;

  try {
    // Check if onboarding details exist for the user
    let onboarding = await Onboarding.findOne({ userId });

    if (!onboarding) {
      // Create new onboarding details
      onboarding = new Onboarding({ userId, phoneNumber, additionalEmail, jobRole, age, location, bio });
    } else {
      // Update existing onboarding details
      onboarding.phoneNumber = phoneNumber;
      onboarding.additionalEmail = additionalEmail;
      onboarding.jobRole = jobRole;
      onboarding.age = age;
      onboarding.location = location;
      onboarding.bio = bio;
    }

    // Save or update onboarding details
    await onboarding.save();

    res.status(200).json({ message: 'Onboarding details saved successfully', onboarding });
  } catch (error) {
    res.status(500).json({ message: 'Error saving onboarding details', error });
  }
});

// Fetch onboarding details endpoint
app.get('/onboarding/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    // Find onboarding details by userId
    const onboarding = await Onboarding.findOne({ userId });

    if (!onboarding) {
      return res.status(404).json({ message: 'Onboarding details not found' });
    }

    res.status(200).json({ onboarding });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching onboarding details', error });
  }
});

// Add the contact route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
