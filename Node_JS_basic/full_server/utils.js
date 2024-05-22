const fs = require("fs");

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
        return;
      }

      const lines = data.split("\n");
      const fields = {};

      lines.forEach((line) => {
        if (line) {
          const [firstname, lastname, age, field] = line.split(",");
          if (field && field !== "field") {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        }
      });

      resolve(fields);
    });
  });
}

module.exports = readDatabase;
