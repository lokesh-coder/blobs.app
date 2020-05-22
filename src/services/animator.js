import * as dynamics from "dynamics.js";
import { appStore } from "../store";

export default function animator(path, id = "blob") {
  const element = document.getElementById(id);
  if (!element) return;
  const config = {
    type: dynamics.spring,
    frequency: 200,
    friction: 100,
    duration: 1200,
  };
  dynamics.animate(element, { d: path }, config);
}
