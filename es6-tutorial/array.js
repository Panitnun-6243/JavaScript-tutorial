//join, concat, push, pop, shift, unshift
const data = [100, 200, 300]
const data2 = [400, 500]
console.log(data)

//ใช้join เเปลงข้อมูลในอาเรย์เป็นstring
console.log(data.join())
//เอาคอมม่าออกเเล้วเปลี่ยนเป็นเครื่องหมายอื่น 
console.log(data.join(" * "))
//ใช้concat เพื่อเอาข้อมูลในอาเรย์มาต่อกัน
console.log(data.concat(data2))
//push
data.push(...data2)
console.log(data)
//pop
data.pop()
console.log(data)
//push pop ทำงานกับตัวด้านหลัง shift ทำงานกับตัวด้านหน้า
//shift คือการ popข้อมูลตัวหน้าออกจากอาเรย์
data.shift()
console.log(data)
//unshift คือการpushข้อมูลเข้าตัวด้านหน้าของอาเรย์
data.unshift(50)
console.log(data)
