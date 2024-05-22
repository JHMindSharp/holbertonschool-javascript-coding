const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\\n');
      const fields = {};
      let count = 0;

      lines.forEach((line) => {
        if (line) {
          const [firstname, lastname, age, field] = line.split(',');
          if (field && field !== 'field') {
            count += 1;
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        }
      });

      console.log(`Number of students: ${count}`);
      for (const [field, students] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
