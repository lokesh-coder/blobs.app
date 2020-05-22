import { store } from "@risingstack/react-easy-state";

const appStore = store({
  edgesPrev: 0,
  edges: 6,
  growth: 6,
  size: 500,
  path: "",
});

export { appStore };
