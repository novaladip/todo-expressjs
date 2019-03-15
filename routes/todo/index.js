const router = require("express").Router();
const passport = require("passport");
const todoController = require("../../controller/todo");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  todoController.createTodo
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  todoController.getAllTodos
);

router.get(
  "/:todoId",
  passport.authenticate("jwt", { session: false }),
  todoController.selectTodo
);

module.exports = router;
