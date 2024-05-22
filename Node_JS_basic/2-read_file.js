const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const fields = {};
    let count = 0;

    data.forEach((line) => {
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
