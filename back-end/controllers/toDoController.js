const { ToDo } = require('../models/toDoModel')

async function index (req, res) {
  try {
    const allTasks = await ToDo.find();
    res.status= 200;
    res.send(allTasks)
  } catch (e) {
    console.error(e);
    res.status = 500;
  }
}

/* 
async function find (req, res) {
  try {
    const {id} = req.body;
    const oneTask = await ToDo.findById();
    res.status= 200;
    res.send(oneTask)
  } catch (e) {
    console.error(e);
    res.status = 500;
  }
}
*/

async function create (req, res) {
  try {
    const {task, catagory} = req.body;
    const newTask = await ToDo.create({task, catagory});
    res.status = 201;
    res.send(newTask);
  } catch (error) {
      console.error(error)
    res.status = 500;
  }
}

async function update (req, res) {
  try {
    const {id} = req.params
    const {task, catagory} = req.body;
    const updateTask = await ToDo.findByIdAndUpdate(id, {task, catagory});
    res.status(202);
    res.send(updateTask)
  } catch (error) {
    console.error(error)
    res.status = 500
  }
}

async function destroy (req, res) {
  try {
    const {id} = req.params;
    const deleteTask = await ToDo.findByIdAndDelete(id);
    res.status(204);
    res.send(deleteTask)
  } catch (error) {
    console.error(error)
    res.status = 500
  }
}
//change the res.status to function 
module.exports = {index, create, update, destroy}