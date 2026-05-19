const { appendFile, readFile } = require('node:fs');

const file = 'db.txt';

/**
 * add student to db file (db.txt)
 * @param {{name: string, mark: number}} student the student
 * @returns {Promise}
 */
module.exports.addStudent = (student) => {
    return new Promise((resolve, reject) => {
        appendFile(file, student.name + " " + student.mark + "\r\n", (e) => {
            if (e) {
                reject(e);
            } else {
                resolve(`student ${student.name} added successfully`);
            }
        });
    });
};

// החזרת פרומיס עם כל התלמידים או שגיאה
module.exports.getAllStudents = () => {
    // הבטחה להחזיר משהו בעתיד בצורה אסינכרונית
    return new Promise((resolve, reject) => {
        readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
