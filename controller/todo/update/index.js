const Todo = require("../../../models/Todo");
const { isEmpty } = require("../../../validator");

const update = {};

update.finishTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });
    if (isEmpty(todo)) {
      return res.status(404).json({
        error: {
          message: "Todo not found or already deleted"
        }
      });
    }
    todo.isFinish = true;
    todo.finsihDate = Date.now();
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(417).json({
      error: {
        message: "Something went wrong, please try again later."
      }
    });
  }
};

module.exports = update;
