const server = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const passport = require("passport");

const key = require("./config");
const userRoutes = require("./routes/user");
const todoRouters = require("./routes/todo");

const app = server();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

mongoose
  .connect(key.dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("connected to db"))
  .catch(() => console.log("failed to connect to db"));

app.use("/users", userRoutes);
app.use("/todo", todoRouters);

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
