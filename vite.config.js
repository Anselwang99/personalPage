import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(() => {
    // Check if we're building for Cloud Run
    // We'll use a custom build script with CLOUD_RUN=true for Cloud Run builds
    const isCloudRun = import.meta.env?.VITE_DEPLOYMENT === "cloud-run";

    console.log(`Building for: ${isCloudRun ? "Cloud Run" : "GitHub Pages"}`);
    console.log(`Base path: ${isCloudRun ? "/" : "/personalPage/"}`);

    return {
        plugins: [react()],
        // Use root path for Cloud Run, /personalPage/ for GitHub Pages
        base: isCloudRun ? "/" : "/personalPage/",
    };
});
