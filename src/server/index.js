const dotenv = require("dotenv");
const express = require("express");
const fetch = require("node-fetch");

const app = express();
dotenv.config();

/*Dependencies*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Cors */
const cors = require("cors");
app.use(cors());

/* Static site */
app.use(express.static("dist"));

const port = 8000;

const server = app.listen(port, listening);

function listening() {
  console.log("Server runing");
  console.log(`Running on localhost ${port}`);
}

/* Routes */
const fetchRover = async (req, res) => {
  const rover = req.params.rover;
  const API_KEY = process.env.API_KEY;
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${API_KEY}`;

  const getRover = await fetch(URL);
  try {
    const data = await getRover.json();
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
};
app.get(`/:rover`, fetchRover);
