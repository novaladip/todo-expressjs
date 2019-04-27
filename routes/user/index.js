"use strict";

const router = require("express").Router();
const userController = require("../../controller/user");
const passport = require("passport");

/**
 * @route POST api/users/register
 * @desc Registering user
 * @access Public
 */
router.post("/register", userController.register);

/**
 * @route POST api/users/login
 * @desc Get user login
 * @access Public
 * @return jwt token
 */
router.post("/login", userController.login);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  userController.user
);

module.exports = router;
