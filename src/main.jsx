import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

document.documentElement.style.scrollBehavior = "smooth";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
