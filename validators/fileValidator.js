// Read File:
// This function reads the contents of a file asynchronously and returns a Promise with the file's content.

function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

//   Write File:
// This function writes content to a file asynchronously and returns a Promise indicating success or failure.
function writeFileAsync(fileName, content) {
  return new Promise((resolve, reject) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.addEventListener("click", () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
        resolve();
      }, 0);
    });
    a.click();
  });
}

// Delete File:
// This function deletes a file asynchronously and returns a Promise indicating success or failure.
function deleteFileAsync(fileName) {
  return new Promise((resolve, reject) => {
    // Implement file deletion logic here, assuming asynchronous operation
    // For example:
    setTimeout(() => {
      // Some asynchronous operation to delete the file
      resolve();
    }, 1000); // Simulating an asynchronous operation with a delay
  });
}

// Check if File Exists:
// This function checks if a file exists asynchronously and returns a Promise with a boolean indicating whether the file exists or not.
function fileExistsAsync(fileName) {
  return new Promise((resolve, reject) => {
    // Implement file existence check logic here, assuming asynchronous operation
    // For example:
    setTimeout(() => {
      // Some asynchronous operation to check if file exists
      const exists = Math.random() < 0.5; // Simulating existence check randomly
      resolve(exists);
    }, 1000); // Simulating an asynchronous operation with a delay
  });
}

module.exports = {
  fileExistsAsync,
  deleteFileAsync,
  writeFileAsync,
  readFileAsync,
};
