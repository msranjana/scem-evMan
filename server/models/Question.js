const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  title: String,
  options: [String],
  correctAnswer: String,
  testcases: String,
  marks: Number,
}, { timestamps: true });

module.exports = mongoose.models.Question || mongoose.model('Question', questionSchema);
