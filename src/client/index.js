import "./css/main.css";
import { getRover, getApod } from "./js/fetchData";
import { App } from "./js/userInterfaces";
const { Map, List } = require("immutable");

/*Initial state*/
const state = Map({
  title: "Welcome to Mars Rovers Udacity",
  rovers: List(["Curiosity", "Opportunity", "Spirit"]),
  loading: true,
  target: "home",
});
const root = document.querySelector("#root");
/* Updating the state */
const updateState = (prevstate, newState, target) => {
  // state = Object.assign(state, newState);
  const updatedState = prevstate.set("target", target).set(target, newState);
  render(root, updatedState);

  const roversButtons = document.querySelectorAll(".toggle");
  roversButtons.forEach((btn) => {
    btn.onclick = async () => {
      const target = btn.getAttribute("data-target").toLowerCase();

      if (target === "home") {
        const newData = await getApod(state);
        updateState(state, newData, target);
      } else {
        const roverData = await getRover(state, target);
        updateState(state, roverData, target);
      }
    };
  });
};

const render = async (root, state) => {
  root.innerHTML = App(state);
};

window.addEventListener("load", async () => {
  const newData = await getApod(state);
  await updateState(state, newData, "home");
});
