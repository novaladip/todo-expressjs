const bcrypt = require("bcryptjs");

const validateRegisterInput = require("./validator");
const User = require("../../../models/User");
const { isEmpty } = require("../../../utils");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { error, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json({ error });
    }

    const generatedSalt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, generatedSalt);

    const userData = {
      username,
      password: hashPassword
    };

    const existingUser = await User.findOne()
      .where({ username })
      .exec();

    if (!isEmpty(existingUser)) {
      return res.status(400).json({
        error: {
          username: "Username is already taken"
        }
      });
    }

    const newUser = await User.create(userData);
    return res.json(newUser);
  } catch (err) {
    console.log(err);
    return res.status(417).json({
      error: {
        message: "Unknown error occurs, please try again later."
      }
    });
  }
};

module.exports = register;
