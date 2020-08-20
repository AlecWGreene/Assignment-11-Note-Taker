// Load Modules
// ================================================================
const express = require("express");
const fs = require("fs");
const path = require("path");



// Server Setup
// ================================================================
const app = express();
const PORT = 8000;

// Configure settings for the server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// Define Routes
// ================================================================
 

app.listen(PORT, () => { console.log("NoteTaker listening on port " + PORT); });
