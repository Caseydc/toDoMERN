const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  author: String,
  title: String,
  date: Date
})

const ToDo = mongoose.model('todo', toDoSchema);

module.exports = ToDo;
