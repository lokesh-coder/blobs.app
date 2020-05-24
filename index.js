import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "assets/css/main.css";
import "./src/app.scss";
import Loader from "./src/components/loader/loader.component";

const App = React.lazy(() => import("./src/app"));

const Index = () => (
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
);

ReactDOM.render(<Index />, document.getElementById("root"));
