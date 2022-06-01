import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactDOM.render(
  //We wrap our ContextProvider over all our components that need access to that state
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.querySelector("#root")
);
