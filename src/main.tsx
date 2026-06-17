import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { PortfolioProvider } from "./context/PortfolioContext";
import "./index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <PortfolioProvider>
          <App />
        </PortfolioProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
