import "./css/main.css";
import getRover from "./js/fetchData";

let initalState = {
  rovers: ["Curiosity", "Opportunity", "Spirit"],
};
const $root = document.querySelector("#root");
const $button = document.querySelector("#button");

$button.addEventListener("click", getRover);
