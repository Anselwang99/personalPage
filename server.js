import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import process from "process";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "dist");

// Create Express app
const app = express();

// Check environment
const useSubpath = process.env.VITE_USE_SUBPATH === "true";
const basePath = useSubpath ? "/personalPage" : "";
console.log(
    `Configuration: Using subpath: ${useSubpath}, Base path: '${basePath}'`
);

// Log environment variables
console.log("Environment variables:", {
    NODE_ENV: process.env.NODE_ENV || "not set",
    VITE_DEPLOYMENT: process.env.VITE_DEPLOYMENT || "not set",
    VITE_CUSTOM_DOMAIN: process.env.VITE_CUSTOM_DOMAIN || "not set",
    VITE_USE_SUBPATH: process.env.VITE_USE_SUBPATH || "not set",
});

// Log files in dist directory
console.log("Files in dist directory:");
if (fs.existsSync(distPath)) {
    fs.readdirSync(distPath).forEach((file) => {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        console.log(
            `- ${file} (${stats.isDirectory() ? "directory" : "file"}, ${
                stats.size
            } bytes)`
        );
    });
} else {
    console.error(`ERROR: dist directory not found at ${distPath}`);
}

// Simple request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Redirect root to /personalPage/ when using subpath
if (useSubpath) {
    app.use("/", (req, res, next) => {
        if (req.url === "/") {
            console.log("Root path -> Redirecting to /personalPage/");
            return res.redirect("/personalPage/");
        }
        next();
    });

    // Serve static files from /personalPage/
    app.use("/personalPage/", express.static(distPath));

    // Fallback to index.html for any requests to /personalPage/ that don't match a static file
    app.use("/personalPage/", (req, res) => {
        console.log(`Fallback: Serving index.html for: ${req.url}`);
        res.sendFile(path.join(distPath, "index.html"));
    });
} else {
    // For root deployment, serve static files at root
    app.use(express.static(distPath));

    // Fallback for SPA
    app.use((req, res) => {
        console.log(`Fallback: Serving index.html for: ${req.url}`);
        res.sendFile(path.join(distPath, "index.html"));
    });
}

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Serving files from: ${distPath}`);
});
