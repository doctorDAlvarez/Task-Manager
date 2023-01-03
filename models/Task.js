const mongoose = require("mongoose");

//Document schema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name!"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//Model for CRUD
module.exports = mongoose.model("Task", TaskSchema);
