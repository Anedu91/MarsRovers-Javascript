import "./css/main.css";
import { getRover, getApod } from "./js/fetchData";
import { App } from "./js/userInterfaces";

/*Initial state*/
let state = {
  title: "Welcome to Mars Rovers Udacity",
  rovers: ["Curiosity", "Opportunity", "Spirit"],
  loading: true,
  target: "home",
};
const root = document.querySelector("#root");
/* Updating the state */
const updateState = (state, newState) => {
  state = Object.assign(state, newState);
  render(root, state);
};
const updateStateWitout = (state, newState) => {
  state = Object.assign(state, newState);
};

const render = async (root, state) => {
  root.innerHTML = App(state);
};

window.addEventListener("load", async () => {
  render(root, state);
  const newData = await getApod(state);
  await updateState(state, newData);
  console.log(state);

  const roversButtons = document.querySelectorAll(".rover-toggle");
  roversButtons.forEach((btn) => {
    btn.onclick = async () => {
      console.log("click");
      const target = btn.getAttribute("data-target").toLowerCase();
      const roverData = await getRover(state, target);
      const newData = {
        [target]: roverData,
        target: target,
      };
      updateStateWitout(state, newData);
      console.log({ state });
    };
  });
});
