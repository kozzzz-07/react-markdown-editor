import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line import/extensions
import App from "./App";

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line comma-dangle
  document.getElementById("root")
);
