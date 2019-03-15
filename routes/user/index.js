const router = require("express").Router();
const userController = require("../../controller/user");

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

router.get("/", userController.user);

module.exports = router;
