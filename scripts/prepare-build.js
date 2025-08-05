#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { env } from "process";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Config paths
const configPath = path.join(rootDir, "src", "config.js");
const configFallbackPath = path.join(rootDir, "src", "config.fallback.js");
const configTemplatePath = path.join(rootDir, "src", "config.template.js");

console.log("Preparing build...");

if (!fs.existsSync(configPath)) {
    console.log("config.js not found, creating from template...");

    if (fs.existsSync(configTemplatePath)) {
        let templateContent = fs.readFileSync(configTemplatePath, "utf8");

        if (env.VITE_EMAILJS_SERVICE_ID) {
            templateContent = templateContent.replace(
                "YOUR_SERVICE_ID",
                env.VITE_EMAILJS_SERVICE_ID
            );
        }

        if (env.VITE_EMAILJS_TEMPLATE_ID) {
            templateContent = templateContent.replace(
                "YOUR_TEMPLATE_ID",
                env.VITE_EMAILJS_TEMPLATE_ID
            );
        }

        if (env.VITE_EMAILJS_PUBLIC_KEY) {
            templateContent = templateContent.replace(
                "YOUR_PUBLIC_KEY",
                env.VITE_EMAILJS_PUBLIC_KEY
            );
        }

        fs.writeFileSync(configPath, templateContent);
        console.log("Created config.js from template");
    } else {
        console.log("Template not found, creating empty config...");
        const emptyConfig = `// Auto-generated config
export const emailConfig = {
    serviceId: "${env.VITE_EMAILJS_SERVICE_ID || ""}",
    templateId: "${env.VITE_EMAILJS_TEMPLATE_ID || ""}",
    publicKey: "${env.VITE_EMAILJS_PUBLIC_KEY || ""}"
};`;
        fs.writeFileSync(configPath, emptyConfig);
        console.log("Created empty config.js");
    }
}

if (!fs.existsSync(configFallbackPath)) {
    console.log("config.fallback.js not found, creating...");

    const fallbackConfig = `// This file provides a fallback for deployment environments
// It's used when the main config.js file is not available

export const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
};`;

    fs.writeFileSync(configFallbackPath, fallbackConfig);
    console.log("Created config.fallback.js");
}

console.log("Build preparation completed successfully!");
