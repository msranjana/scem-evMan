const mongoose = require('mongoose');
const contestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  type: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  questions: [String],
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'private',
  },
}, { timestamps: true });

module.exports = mongoose.models.Contest||mongoose.model('Contest', contestSchema);
