const getRover = async () => {
  const BASE_URL = "http://localhost:8000/curiosity";
  const res = await fetch(BASE_URL);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { getRover };
