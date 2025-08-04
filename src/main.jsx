import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = "smooth";

// Create the root and render the app
const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

// Optional: Add a loading state
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
