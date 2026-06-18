/* 
- ให้เขียน Function ที่ชื่อว่า updateStudentScore ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 3 ตัวคือ studentsInfo, targetStudent, addScore
        1. studentsInfo เป็น Array ของ Object ที่บรรจุรายชื่อนักเรียน โดย Object แต่ละอันจะมี Key 4 ตัวได้แก่ name , age, classNumber และ score
        2. targetStudent เป็น String ที่บรรจุชื่อนักเรียนที่ต้องการค้นหา
        3. addScore เป็น Number ที่บรรจุตัวเลขคะแนนที่จะเพิ่มเข้าไป
    - Function นี้จะค้นหาว่า studentsInfo มี targetStudent อยู่หรือไม่ และ Return ค่าออกมาดังนี้:
        - หากพบให้
            - เพิ่ม addScore เข้าไปใน score
            - จากนั้น Return ข้อความ <targetStudent> score is now <newScore>
        - หากไม่พบให้ Return Not found <targetStudent> on the list.
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
const updateStudentScore = (studentsInfo, targetStudent, addScore) => {
    let [left, right] = [0, studentsInfo.length - 1];

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let currentName = studentsInfo[mid].name;

        if (currentName === targetStudent) {
    studentsInfo[mid].score += addScore;
    return `${targetStudent} score is now ${studentsInfo[mid].score}`;
        }

        currentName < targetStudent ? left = mid + 1 : right = mid - 1;
    }
    return `Not found ${targetStudent} on the list`;
};

const studentsInfo = [
  { name: "Alice", age: 14, classNumber: 8, score: 70 },
  { name: "Bob", age: 13, classNumber: 7, score: 65 },
  { name: "Charlie", age: 15, classNumber: 9, score: 85 },
  { name: "Diana", age: 14, classNumber: 8, score: 75 },
  { name: "Ethan", age: 13, classNumber: 7, score: 47 },
];

console.log(updateStudentScore(studentsInfo, "Ethan", 20));
// Ethan score is now 67

console.log(updateStudentScore(studentsInfo, "Jenny", 10));
// Not found Jenny on the list
