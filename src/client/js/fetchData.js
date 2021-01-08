import fetch from "node-fetch";

const getApod = async () => {
  const BASE_URL = "http://localhost:8000/apod";

  const res = await fetch(BASE_URL);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const getRover = async () => {
  const BASE_URL = "http://localhost:8000/rover/curiosity";
  const res = await fetch(BASE_URL);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { getRover, getApod };
