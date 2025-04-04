import React from "react";
import ReactDOM from "react-dom/client";
import ThemeSwitch from "./ThemeSwitch";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeSwitch />
  </React.StrictMode>
);
