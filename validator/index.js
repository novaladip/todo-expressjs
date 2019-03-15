const validator = {};

validator.isEmpty = require("./isEmpty");
validator.validateRegisterInput = require("./registerValidateInput");
validator.validateLoginInput = require("./validateLoginInput");

module.exports = validator;
