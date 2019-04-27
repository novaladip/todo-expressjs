const Validator = require("validator");
const { isEmpty } = require("../../../../utils");

const validateTodoInput = value => {
  const error = {};

  const title = !isEmpty(value.title) ? value.title : "";
  const description = !isEmpty(value.description) ? value.description : "";
  const deadline = !isEmpty(value.deadline) ? value.deadline : "";

  if (!Validator.isLength(title, { max: 200 })) {
    error.title = "Max title length is 200";
  }

  if (isEmpty(title)) {
    error.title = "Title field is required";
  }

  if (!Validator.isLength(description, { max: 400 })) {
    error.description = "Max description length is 400";
  }

  if (!Validator.toDate(deadline)) {
    error.deadline = "Please input a valid date";
  }

  if (!isEmpty(deadline)) {
    const inputDate = new Date(deadline);
    const now = new Date();
    if (inputDate < now) {
      error.deadline = "Please be serious on setting a deadline";
    }
  }

  if (isEmpty(deadline)) {
    error.deadline = "Deadline field is required";
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};

module.exports = validateTodoInput;
