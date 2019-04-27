"use strict";
const router = require("express").Router();
const passport = require("passport");
const todoController = require("../../controller/todo");
const { checkTodoOwnership } = require("../../middleware/");

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
  checkTodoOwnership,
  todoController.selectTodo
);

router.delete(
  "/:todoId",
  passport.authenticate("jwt", { session: false }),
  checkTodoOwnership,
  todoController.deleteTodo
);

router.put(
  "/:todoId/finish",
  passport.authenticate("jwt", { session: false }),
  checkTodoOwnership,
  todoController.finishTodo
);

module.exports = router;
