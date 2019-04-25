const Todo = require("../../../models/Todo");

const read = {};

read.getAllTodos = (req, res) => {
  const isFinish = req.query.isFinish || false;
  const limit = parseInt(req.query.limit) || 5;
  const page = req.query.page || 1;

  Todo.find({
    createdBy: req.user._id,
    isFinish
  })
    .skip(limit * page - limit)
    .limit(limit)
    .sort({ createdDate: -1 })
    .exec()
    .then(todos => res.json(todos))
    .catch(err => {
      res.status(417).json({
        error: {
          message: "Something went wrong, please try again.",
          data: err
        }
      });
    });
};

read.selectTodo = (req, res) => {
  return res.json(res.locals.todo);
};

module.exports = read;
