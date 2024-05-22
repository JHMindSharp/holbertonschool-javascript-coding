const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((fields) => {
        res.status(200).send('This is the list of our students\n');
        for (const [field, students] of Object.entries(fields)) {
          res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        }
        res.end();
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((fields) => {
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

module.exports = StudentsController;
