// fs (file system) - מערכת הקבצים
const { appendFileSync } = require('node:fs');

// פונקציות על ניתובים/מחרוזת
// למשל סיומת של קובץ
const path = require('node:path');

const file1 = "D:/nodeA-2026/lessons/book.pdf";
const file2 = "../lessons/book.pdf";
// console.log(file1.substring(file1.indexOf('.')));
console.log(path.extname(file1)); // סיומת של קובץ
console.log(path.dirname(file1)); // ניתוב של התיקיה
console.log(path.basename(file1)); // שם הקובץ
console.log(path.isAbsolute(file1)); // true - האם נתיב מוחלט
console.log(path.isAbsolute(file2)); // false - האם נתיב מוחלט
console.log('__dirname:', __dirname); // ניתוב של התיקיה של הקובץ שרץ
console.log('__filename:', __filename); // ניתוב של הקובץ שרץ

const newFile = "my new file.txt";
// יוצר את הקובץ לפי הניתוב של התיקיה בטרמינל
// appendFileSync(newFile, "");

// יוצר את הקובץ בתיקיה של הקובץ שרץ
// כי כתבנו ניתוב מלא
console.log('+   :', __dirname + "\\" + newFile);
// appendFileSync(__dirname + "\\" + newFile, "");

// במקום להשתמש בדרך שלעיל לשרשור של כתובות
// join נעדיף להשתמש בפונקציה השמורה
// כי זה לא תלוי במערכת ההפעלה
console.log('join:', path.join(__dirname, newFile));
// appendFileSync(path.join(__dirname, newFile), "");

console.log('resolve:', path.resolve("../lessons/../abc/book.pdf")); // הופך ניתוב יחסי למוחלט
// D:\nodeA-2026\abc\book.pdf

// os (operation system) - מערכת ההפעלה
const os = require('node:os');
console.log('='.repeat(50));
console.log(os.type()); // windows סוג מערכת הפעלה למשל
console.log(os.homedir()); // תיקיה ראשית של המשתמש הנוכחי