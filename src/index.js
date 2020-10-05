import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

const ele = (
  <Provider store={store()}>
    <App />
  </Provider>
);

ReactDOM.render(ele, document.getElementById("root"));
