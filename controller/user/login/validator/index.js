const { isEmpty } = require("../../../../utils");

const validateLoginInput = value => {
  const error = {};
  const username = !isEmpty(value.username) ? value.username : "";
  const password = !isEmpty(value.password) ? value.password : "";

  if (isEmpty(username)) {
    error.username = "Username field is required";
  }

  if (isEmpty(password)) {
    error.password = "Password field is required";
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};

module.exports = validateLoginInput;
