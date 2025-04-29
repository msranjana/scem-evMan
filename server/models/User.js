const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  name: String,
  role:{
    type: String,
    default: "user"
  },
  registeredContests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contest',
  }],
}, { timestamps: true });

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
