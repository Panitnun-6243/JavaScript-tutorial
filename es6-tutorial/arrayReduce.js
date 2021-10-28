// นำสมาชิกในอาเรย์มาดำเนินการ เเล้วoutputออกมาเป็นค่า ค่าเดียว
//ทบทวน filter, map
const numbers = [10,20,30,40]

const mapNumber = numbers.map(e=>{
    return e = 100
})
console.log(mapNumber)

const filterNumber = numbers.filter(e=>{
    return e > 20
})
console.log(filterNumber)

// array.reduce((ค่าที่ถูกประมวลผล, e)=>{}, ค่าเริ่มต้น) ค่าเริ่มต้นเหมือนการประกาศตัวเเปรเริ่มต้นก่อนดำเนินการ ค่าที่ถูกประมวลผลมีค่าคือค่าเริ่มต้น
const reduceNumber = numbers.reduce((value, e)=>{
    const total = value+e
    return total
}, 0)
// e มี 10,20,30,40
//value = 0
//total = 0 + 10
//total = 10 + 20 รันไปเรื่อยๆ ง่ายๆนะ ใช้for loop เหอะ
console.log(reduceNumber)