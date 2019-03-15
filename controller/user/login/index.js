const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { validateLoginInput, isEmpty } = require("../../../validator");
const User = require("../../../models/User");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { error, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json({ error });
    }

    const user = await User.findOne({ username }).select("username password");

    if (isEmpty(user)) {
      return res.status(400).json({ error: { username: "User not found" } });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        error: {
          password: "Incorrect password"
        }
      });
    }

    return res.json(user);
  } catch (err) {
    return res.status(417).json({
      error: {
        message: "Unknown error occurs, please try again later"
      }
    });
  }
};

module.exports = login;
