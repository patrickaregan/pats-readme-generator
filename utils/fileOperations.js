// Include packages needed for this application
const fs = require('fs');

// Create a function to write to a file.
const writeFile = fileData => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileData, err => {
            if (err) {
                reject(err);
                return
            }
            resolve({
                ok: true,
                message: "File created successfully!"
            })
        })
    })
}

module.exports = { writeFile };