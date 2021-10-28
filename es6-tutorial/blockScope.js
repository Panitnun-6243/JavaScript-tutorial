// var เลิกใช้เเล้วเพราะมันทะลุblock scope
// เปลี่ยนมาใช้ let กับ const
// let ตัวเเปรที่เปลี่ยนค่าได้
let i
i = 1
console.log(i)
// constant ใช้เก็บค่าคงที่
const y = 10
y = 2 // error เพราะมันเปลี่ยนค่าบ่ได้เด้อ
console.log(y)