import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle routes for single-page application
app.use((req, res, next) => {
    // Skip API routes or static files
    if (req.path.startsWith("/api") || req.path.includes(".")) {
        return next();
    }
    // For all other routes, serve the index.html file
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Use environment port or 8080 as default
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
