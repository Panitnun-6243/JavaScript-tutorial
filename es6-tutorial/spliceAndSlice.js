//splice(ตำเเหน่งที่จะลบ, จำนวนที่จะลบ, สมาชิกที่ต้องการเเทรกเข้าไปในตำเเหน่งที่ลบ)
//slice(ตำเเหน่งเริ่มต้น, ตำเเหน่งสุดท้าย)

const data = [10,20,30,40,50]
data.splice(2,2)
console.log(data)
data.splice(2,1,999)
console.log(data)

const data2 = [10,20,30,40,50]
const miniData = data2.slice(1,4)
console.log(miniData)


