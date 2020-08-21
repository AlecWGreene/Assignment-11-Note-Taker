// Load Modules
// ================================================================
const express = require("express");
const fs = require("fs");
const path = require("path");



// Server Setup
// ================================================================

// Create consts
const app = express();
const PORT = process.env.PORT || 3090;

// Configure settings for the server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// API Handlers
// ================================================================

/** Retrieves the notes from db.json */
function getNotes(arg_request, arg_response){
    arg_response.json(path.join(__dirname, "./db/db.json"));
}

/** Saves a note to the db.json */
function postNote(arg_request, arg_response){

}

/** Deletes a note using a passed id */
function deleteNote(arg_request, arg_response){

}


// Define Routes
// ================================================================

// Index Page
app.get("/", (arg_request, arg_response) => {
    arg_response.sendFile(path.join(__dirname, "public/index.html"));
});

// Note Added Page
app.get("*", (arg_request, arg_response) => {
    arg_response.sendFile(path.join(__dirname, "public/notes.html"));
});

// API Routes
app.get("/api/notes", getNotes);
app.post("/api/notes", postNote);
app.delete("/api/notes/:id", deleteNote);

// Listen on the port
app.listen(PORT, () => { console.log("NoteTaker listening on port " + PORT); });
