const Todo = require("../../../models/Todo");
const { isEmpty } = require("../../../utils");

const update = {};

update.finishTodo = async (req, res) => {
  const { todo } = res.locals;
  todo.isFinish = true;
  todo.finishDate = Date.now();

  const updatedTodo = await todo.save();
  res.json(updatedTodo);
};

module.exports = update;
