const express = require("express");

const app = express();

/*Dependencies*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Cors */
const cors = require("cors");
app.use(cors());

const port = 8000;

const server = app.listen(port, listening);

function listening() {
  console.log("Server runing");
  console.log(`Running on localhost ${port}`);
}
