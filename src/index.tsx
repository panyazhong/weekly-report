import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./style/App.scss";
import "../node_modules/antd/dist/antd.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";

import { initTheme } from "./Theme/theme";

initTheme("light");

ReactDOM.render(
  // <React.StrictMode>
  <Router />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
