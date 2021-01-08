import "./css/main.css";
import { getRover, getApod } from "./js/fetchData";
import { App } from "./js/userInterfaces";

/*Initial state*/
let state = {
  title: "Welcome to Mars Rovers Udacity",
  rovers: ["Curiosity", "Opportunity", "Spirit"],
};
const root = document.querySelector("#root");
/* Updating the state */
const updateState = (state, newState) => {
  state = Object.assign(state, newState);
  render(root, state);
};

const render = async (root, state) => {
  root.innerHTML = App(state);
};

window.addEventListener("load", async () => {
  render(root, state);
  const newData = await getApod();
  await updateState(state, newData);
  console.log(state);
});
