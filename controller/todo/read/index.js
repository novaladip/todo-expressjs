const Todo = require("../../../models/Todo");
const { isEmpty } = require("../../../validator");

const read = {};

read.getAllTodos = (req, res) => {
  Todo.find()
    .where({ createdBy: req.user._id, isFinish: false })
    .limit(20)
    .sort({ createdDate: 1 })
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

read.selectTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.find()
      .where({ _id: todoId })
      .exec();
    if (isEmpty(todo)) {
      return res.status(404).json({
        error: {
          message: "Todo not found or already destroyed"
        }
      });
    }
    res.json(todo);
  } catch (err) {
    let message = "Failed to load Todo data";
    if (
      (err.message =
        'Cast to ObjectId failed for value "5c8b951c0c27be09" at path "_id" for model "Todo"')
    )
      message = "Invalid Todo Id";
    res.status(417).json({ error: message, data: err.message });
  }
};

module.exports = read;
