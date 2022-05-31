import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ResultContextProvider } from "./contexts/ResultsContectProvider";

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.querySelector("#root")
);
