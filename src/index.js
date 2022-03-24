import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ComboBox from "./ComboBox";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <ComboBox />
  </StrictMode>,
  rootElement
);
