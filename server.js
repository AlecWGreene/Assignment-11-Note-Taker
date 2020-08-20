// Load Modules
// ================================================================
const express = require("express");
const fs = require("fs");
const path = require("path");



// Server Setup
// ================================================================

// Create consts
const app = express();
const PORT = process.env.PORT || 3001;

// Configure settings for the server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// Define Routes
// ================================================================

// Index page
app.get("/", (arg_request, arg_response) => {
    arg_response.json(path.join(__dirname, "public/index.html"));
});

// Listen on the port
app.listen(PORT, () => { console.log("NoteTaker listening on port " + PORT); });
