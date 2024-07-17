// Import the 'fs' module to interact with the file system
const fs = require("fs");

// Import the 'path' module to work with directory paths
const path = require("path");

// Define the directory you want to read
const directoryPath = path.join(__dirname, "test-directory");

// Function to list all files in the specified directory
function listFilesInDirectory(directory) {
  // Read the directory
  fs.readdir(directory, (err, files) => {
    // Handle any errors that occur while reading the directory
    if (err) {
      return console.error("Unable to scan directory: " + err);
    }
    // List all files using forEach
    files.forEach((file) => {
      console.log(file);
    });
  });
}

// Call the function to list files
listFilesInDirectory(directoryPath);
