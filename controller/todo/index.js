const createTodo = require("./create");
const { getAllTodos, selectTodo } = require("./read");

const todoController = {
  createTodo: createTodo,
  getAllTodos: getAllTodos,
  selectTodo
};

module.exports = todoController;
