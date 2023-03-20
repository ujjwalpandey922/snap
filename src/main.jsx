import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import CanvasProvider from "./Context/CanvasContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <CanvasProvider>
    <App />
  </CanvasProvider>
);
