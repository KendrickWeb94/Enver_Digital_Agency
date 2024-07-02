const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Add more fields as needed
}, { timestamps: true });

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;
