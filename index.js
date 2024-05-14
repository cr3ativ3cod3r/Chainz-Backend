const express = require('express');
const bodyParser = require('body-parser');
const connectdb = require('./config/dbconfig');
connectdb();

const app = express();
const port = 3000;
const UserRoutes = require("./routes/UserRoutes");
const cycleRoutes = require("./routes/cycleRoutes");



app.use(bodyParser.json());//ALWAYS PUT PARSER BEFORE REGISTERING THE ROUTEHANDLER
app.use("/chainz",UserRoutes);
app.use("/chainz",cycleRoutes);

app.listen(port, () => {
  console.log(`Example shit app listening on port ${port}`)
})