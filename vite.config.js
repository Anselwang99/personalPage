import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as process from "process";

// https://vite.dev/config/
export default defineConfig(() => {
    // Check if we're building for Cloud Run using direct environment variable access
    // Need to use import.meta.env.VITE_ for client-side and process.env for server-side/build
    const isCloudRun = process.env?.VITE_DEPLOYMENT === "cloud-run";

    // Check if this is a custom domain build
    const isCustomDomain = process.env?.VITE_CUSTOM_DOMAIN === "true";

    // Determine the deployment environment
    let buildTarget = "GitHub Pages";
    if (isCloudRun)
        buildTarget = isCustomDomain ? "Custom Domain" : "Cloud Run";

    // Choose the appropriate base path
    const basePath = isCloudRun
        ? isCustomDomain
            ? "/"
            : "/"
        : "/personalPage/";

    // Debug output
    console.log(`Building for: ${buildTarget}`);
    console.log(`Base path: ${basePath}`);
    console.log("Environment variables:", {
        VITE_DEPLOYMENT: process.env?.VITE_DEPLOYMENT,
        VITE_CUSTOM_DOMAIN: process.env?.VITE_CUSTOM_DOMAIN,
    });

    return {
        plugins: [react()],
        base: basePath,
    };
});
