const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  task: String,
  catagory: String
})

const ToDo = mongoose.model('todo', toDoSchema);

module.exports = { ToDo };