const server = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();

const key = require("./config");
const userRoutes = require("./routes/user");
const todoRouters = require("./routes/todo");

const app = server();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(morgan());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use("/users", userRoutes);
app.use("/todo", todoRouters);

mongoose
  .connect(key.dockerDbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000
  })
  .then(() => console.log("connected to db"))
  .catch(() => console.log("failed to connect to db"));

const res404 = {
  error: {
    message: "Error 404 routes not found"
  }
};

app.all("*", (req, res) => res.status(404).json(res404));

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
