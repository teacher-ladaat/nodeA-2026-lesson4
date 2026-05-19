const { addStudent, getAllStudents } = require("./filePromise2");

// addStudent({ name: 'tehila', mark: 90 });
// addStudent({ name: 'tamar', mark: 100 });

// const s = getAllStudents();
// console.log(s);

// 1. הדפסת כל התלמידים
// 2. הוספת 2 תלמידים - לא משנה הסדר
// 3. הדפסת כל התלמידים
getAllStudents()
    .then(students => { // קריאת קובץ הצליחה
        console.log('before students is:')
        console.log(students);

        // then-catch-מה שיחזור מפה ימשיך בשרשרת ה
        // return addStudent({ name: 'sari', mark: 95 });

        // כל הפונקציות במערך יתבצעו במקביל בצורה אסינכרונית
        return Promise.all([
            addStudent({ mark: 95, name: 'Lorem' }),
            addStudent({ mark: 98, name: 'SARA' }),
        ]);
    })
    .then(strArr => { // הוספת 2 תלמידים הצליחה
        console.log(strArr);
        return getAllStudents();
    })
    .then(console.log) // then(x => console.log(x))
    .catch(error => console.log('ERROR!!!!!!', error.message));