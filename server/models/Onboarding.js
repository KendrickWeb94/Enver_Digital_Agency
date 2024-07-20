// models/Onboarding.js

const mongoose = require('mongoose');

const onboardingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  phoneNumber: {
    type: String
  },
  additionalEmail: {
    type: String
  },
  jobRole: {
    type: String
  },
  age: {
    type: Number
  },
  location: {
    type: String
  },
  bio: {
    type: String
  }
});

const Onboarding = mongoose.model('Onboarding', onboardingSchema);

module.exports = Onboarding;
