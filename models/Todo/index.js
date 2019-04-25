const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 200
  },
  description: {
    type: String,
    maxlength: 400,
    default: ""
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  isFinish: {
    type: Boolean,
    default: false
  },
  finishDate: {
    type: Date,
    default: ""
  },
  deadline: {
    type: Date,
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = Todo = mongoose.model("Todo", todoSchema);
