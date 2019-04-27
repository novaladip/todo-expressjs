"use strict";

const deleteTodo = (req, res) => {
  const { todo } = res.locals;
  todo.remove();
  return res.json(todo);
};

module.exports = deleteTodo;
