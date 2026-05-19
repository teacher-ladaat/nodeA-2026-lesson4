const { getAllStudents } = require("./filePromise2");

// 1. הדפסת כל התלמידים
// 2. הוספת 2 תלמידים - לא משנה הסדר
// 3. הדפסת כל התלמידים
async function main() {
    try {
        const arr = await getAllStudents();
        // הצליח לקרוא את כל התלמידים
        console.log(arr); // by resolve

        await Promise.all([
            addStudent({ mark: 50, name: 'AAA' }),
            addStudent({ mark: 60, name: 'BBB' }),
        ]);

        // הצליח להוסיף את שני התלמידים
        console.log('students added successfully');
        
        const x = await getAllStudents();
        console.log(x); // הצליח לקרוא את הקובץ לאחר ההוספה
    } catch (error) {
        console.log(error.message);
    }
}

main();
main();
main();
main();