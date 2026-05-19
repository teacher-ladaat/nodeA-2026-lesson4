const { appendFile, readFile } =  require('node:fs/promises');

const file = 'db.txt';

/**
 * add student to db file (db.txt)
 * @param {{name: string, mark: number}} student the student
 * @returns {Promise}
 */
module.exports.addStudent = (student) => {
    return appendFile(file, student.name + " " + student.mark + "\r\n");
};

// החזרת פרומיס עם כל התלמידים או שגיאה
module.exports.getAllStudents = () => {
    return readFile(file, 'utf8');
};