import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style/styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import appReducer from "./store/reducer";
const loader = document.querySelector(".loader");

const hideLoader = () => loader!.classList.add("loader--hide");
const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <App hideLoader={hideLoader} />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
