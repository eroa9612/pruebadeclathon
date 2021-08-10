import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import App from "./App";
import { StateProvider } from "./contexto/store";
import { mainReducer } from "./contexto/reducers";
import { initialState } from "./contexto/initialState";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
