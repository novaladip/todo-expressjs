const Todo = require("../../../models/Todo");
const { isEmpty } = require("../../../validator");

const deleteTodo = (req, res) => {
  const { todoId } = req.params;
  Todo.findOneAndRemove({ _id: todoId })
    .then(deletedTodo => {
      if (isEmpty(deletedTodo)) {
        return res.status(404).json({
          error: { message: "Todo not found" }
        });
      }
      res.json(deletedTodo);
    })
    .catch(err =>
      res.status(417).json({
        error: {
          message: "Failed to delete Todo",
          data: err.message
        }
      })
    );
};

module.exports = deleteTodo;
