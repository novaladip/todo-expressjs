const Validator = require("validator");
const { isEmpty } = require("../../../../utils");

function validateRegisterInput(value) {
  const error = {};

  const username = !isEmpty(value.username) ? value.username : "";
  const password = !isEmpty(value.password) ? value.password : "";

  if (!Validator.isAlphanumeric(username)) {
    error.username = "Only Alphanumeric is allowed";
  }
  if (isEmpty(username)) {
    error.username = "Username field is required";
  }

  if (!Validator.isLength(password, { min: 6 })) {
    error.password = "Password must be at least 6 character";
  }
  if (isEmpty(password)) {
    error.password = "Password field is required";
  }

  return {
    error,
    isValid: isEmpty(error)
  };
}

module.exports = validateRegisterInput;
