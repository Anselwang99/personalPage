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

// Basic request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// First, serve static files
app.use(express.static(distPath));

// Then handle SPA routes - serve index.html for any path that doesn't match a file
app.use((req, res) => {
    console.log(`Fallback to index.html for: ${req.url}`);

    const indexPath = path.join(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        console.error(`Error: index.html not found at ${indexPath}`);
        res.status(404).send(
            "index.html not found. Build may be missing or incomplete."
        );
    }
});

// Use environment port or 8080 as default
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Serving files from: ${distPath}`);

    // Log environment info
    console.log("Environment variables:", {
        NODE_ENV: process.env.NODE_ENV || "not set",
        VITE_DEPLOYMENT: process.env.VITE_DEPLOYMENT || "not set",
    });

    // Check if index.html exists and list directory contents
    try {
        const indexPath = path.join(distPath, "index.html");

        if (fs.existsSync(indexPath)) {
            console.log(`index.html found at ${indexPath}`);
            console.log(`File size: ${fs.statSync(indexPath).size} bytes`);

            // List files in dist directory
            console.log("Files in dist directory:");
            const files = fs.readdirSync(distPath);
            files.forEach((file) => {
                const filePath = path.join(distPath, file);
                const stats = fs.statSync(filePath);
                console.log(
                    `- ${file} (${
                        stats.isDirectory() ? "directory" : "file"
                    }, ${stats.size} bytes)`
                );
            });
        } else {
            console.error(`WARNING: index.html not found at ${indexPath}`);
        }
    } catch (err) {
        console.error("Error checking for index.html:", err);
    }
});
