import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { SearchProvider } from "./Components/Contexts/searchContext";
import { BrowserRouter } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <SearchProvider>
        <App />
      </SearchProvider>

    </BrowserRouter>
  </React.StrictMode>
);
