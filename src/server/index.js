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
const fetchApod = async (req, res) => {
  const API_KEY = process.env.API_KEY;
  const RANDOM_APOD = 1;
  const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${RANDOM_APOD}`;

  const getApod = await fetch(URL);
  try {
    const data = await getApod.json();
    const objectData = {
      picOfTheDay: data[0],
    };
    res.send(objectData);
  } catch (error) {
    console.log("error", error);
  }
};
app.get("/apod", fetchApod);

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
app.get(`/rover/:rover`, fetchRover);
