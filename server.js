import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";
import fs from "fs";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Add request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle routes for single-page application
app.use((req, res, next) => {
    // Skip API routes or static files
    if (req.path.startsWith("/api") || req.path.includes(".")) {
        return next();
    }
    // For all other routes, serve the index.html file
    console.log(`Serving index.html for path: ${req.path}`);
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Add error handler middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Use environment port or 8080 as default
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Serving files from: ${path.join(__dirname, "dist")}`);
    // Check if index.html exists
    try {
        const indexPath = path.join(__dirname, "dist", "index.html");
        if (fs.existsSync(indexPath)) {
            console.log(`index.html found at ${indexPath}`);
        } else {
            console.error(`WARNING: index.html not found at ${indexPath}`);
        }
    } catch (err) {
        console.error("Error checking for index.html:", err);
    }
});
