let mongoose = require('mongoose')

let projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  memebers: [{
    name: String,
    id: String,
    role: String
  }]
});

module.exports = mongoose.model('projects', projectSchema);
