const validateTodoInput = require("./validator");
const Todo = require("../../../models/Todo");

const createTodo = async (req, res) => {
  try {
    const { user } = req;
    const { title, description, deadline } = req.body;

    const { error, isValid } = validateTodoInput(req.body);

    if (!isValid) {
      return res.status(400).json({ error });
    }

    const todoData = {
      title,
      description,
      deadline,
      createdBy: user._id
    };

    const newTodo = await Todo.create(todoData);
    res.json(newTodo);
  } catch (err) {
    res.status(417).json({
      error: {
        message: "Unknown error occurs, please try again later",
        data: err
      }
    });
  }
};

module.exports = createTodo;
