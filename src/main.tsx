/**
 * Application Entry Point
 * This file initializes the React application and renders the root component
 */

// Import necessary dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Create root and render the application
// StrictMode is used to highlight potential problems in the application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
