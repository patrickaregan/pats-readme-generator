const fs = require('fs');

const createFile = fileData => {
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

module.exports = { createFile };