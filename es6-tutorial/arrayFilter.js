//ใช้ในการคัดกรองข้อมูลสำหรับนำไปใช้ต่อ ซึ่งเก็บไว้ในอาเรย์อีกตัวหนึ่ง
const data = [10,20,30,40]

const MoreThan20 = data.filter(e=>{
    return e > 20
})
console.log(MoreThan20)
//การนำไปใช้ประโยชน์
const customerData = [
    {name: "kong", salary: 25000, department: "Programmer"},
    {name: "jojo", salary: 30000, department: "Marketing"},
    {name: "nut", salary: 10000, department: "Training"},
    {name: "bell", salary: 50000, department: "Manager"},
    {name: "joy", salary: 20000, department: "Programmer"}
]
//สามารถกรองซ้อนได้ ถ้ามีเงื่อนไขเพิ่ม
const salaryMoreThan20k = customerData.filter(e=>{
    return e.salary > 20000
}).filter(e=>{
    return e.department === "Programmer"
} )
console.log(salaryMoreThan20k)