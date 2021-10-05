import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Heading from "./Heading";
import List from "./List";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Heading />
    <List />
  </StrictMode>,
  rootElement
);
