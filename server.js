const server = require("express");

const app = server();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
