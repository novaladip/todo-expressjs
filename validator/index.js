const validator = {};

validator.isEmpty = require("./isEmpty");
validator.validateRegisterInput = require("./registerValidateInput");
validator.validateLoginInput = require("./validateLoginInput");
validator.validateTodoInput = require("./validateTodoInput");

module.exports = validator;
