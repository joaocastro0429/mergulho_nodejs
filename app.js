const express = require("express");

const app = express();
app.use(express.json());

require("./routes/app.route")(app);




module.exports = app;
