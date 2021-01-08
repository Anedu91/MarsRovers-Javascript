import fetch from "node-fetch";

const getApod = async (state) => {
  const BASE_URL = "http://localhost:8000/apod";
  const res = await fetch(BASE_URL);

  state.loading = true;
  try {
    const data = await res.json();
    state.loading = false;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const getRover = async (state, rover) => {
  const BASE_URL = `http://localhost:8000/rover/${rover}`;
  const res = await fetch(BASE_URL);
  state.loading = true;
  try {
    const data = await res.json();
    state.loading = false;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { getRover, getApod };
