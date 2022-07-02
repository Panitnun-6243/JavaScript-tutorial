// การประกาศตัวแปร ถ้าไม่ assign ค่าให้ เริ่มต้น ค่าจะเป็น undefined นะ เช่น
var name
console.log(name) // undefined

// semi colon จะใส่หรือไม่ใส่ก็ได้
var name // แบบนี้ก็ได้
var name2 // แบบนี้ก็ได้

// กระใช้ String ได้ทั้ง double quote และ single quote
var name = 'Tanny'
var name = "Tanny" // ได้ทั้งคู่

// JavaScript ไม่ต้องกำหนด data type
var name = 1
name = 3.14
name = 'NongTanny'
name = {}
name = []

// สร้าง Array เปล่าๆ
var myArray = []

// เพิ่มค่าลง array
myArray.push(10)

// ลบค่าล่าสุด
myArray.pop()

// clear ค่า array
myArray.length = 0

// หรือ
myArray = []

// function สร้างได้หลายแบบ
// แบบ function declaration
function Tanny() {
  console.log('NongTanny!')
}

// แบบ function expression
const hello = function () {
  console.log('Hello!')
}

// การ execute function หรือ call function เรียกชื่อ function และใช้ปีกกา เปิด ปิด
ahoy()
hello()

// การลูป array แบบ forEach
let numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (num) {
  console.log(num)
})

// หรือ
const count = function (num) {
  console.log(num)
}
numbers.forEach(count)

// การสร้าง Object
var user = {} // สร้าง object เปล่าๆ

// สร้าง object แบบมีค่า name
var user = {
  name: 'Admin'
}

// แบบ dot notation คือสร้าง object ว่างๆ แล้วค่อยเพิ่ม key value
var user = {}
user.name = 'Admin'

// ใน object เป็น javascript ก็ได้นะ
var user = {
  name: 'Admin',
  hello: function () {
    console.log('Hello')
  }
}

// เรียกใช้ก็แบบนี้
user.hello()