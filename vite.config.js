import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as process from "process";

// https://vite.dev/config/
export default defineConfig(() => {
    // Check if we're building for Cloud Run using direct environment variable access
    // Need to use import.meta.env.VITE_ for client-side and process.env for server-side/build
    const isCloudRun = process.env?.VITE_DEPLOYMENT === "cloud-run";

    // Debug output
    console.log(`Building for: ${isCloudRun ? "Cloud Run" : "GitHub Pages"}`);
    console.log(`Base path: ${isCloudRun ? "/" : "/personalPage/"}`);
    console.log("Environment variable check:", {
        VITE_DEPLOYMENT: process.env?.VITE_DEPLOYMENT,
    });

    return {
        plugins: [react()],
        // Use root path for Cloud Run, /personalPage/ for GitHub Pages
        base: isCloudRun ? "/" : "/personalPage/",
    };
});
