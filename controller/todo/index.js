const createTodo = require("./create");
const deleteTodo = require("./delete");
const { getAllTodos, selectTodo } = require("./read");
const { finishTodo } = require("./update");

const todoController = {
  createTodo,
  getAllTodos,
  selectTodo,
  deleteTodo,
  finishTodo
};

module.exports = todoController;
