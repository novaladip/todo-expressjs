const Todo = require("../../models/Todo");
const { isEmpty } = require("../../utils");

async function checkTodoOwnership(req, res, next) {
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

    if (todo.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        error: {
          message: "You are not allowed to do this"
        }
      });
    }
    res.locals.todo = todo;
    next();
  } catch (error) {
    console.warn(error);
    res.status(417).json({
      error: {
        message: "Unkown error occurs, please try again."
      }
    });
  }
}

module.exports = checkTodoOwnership;
