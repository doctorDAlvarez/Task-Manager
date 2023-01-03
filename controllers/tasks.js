const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("All Items from controller");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getTask = (req, res) => {
  res.json(req.params.id);
};

const updateTask = (req, res) => {
  res.send("Task Updated");
};

const deleteTask = (req, res) => {
  res.send("Task Destroyed");
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
